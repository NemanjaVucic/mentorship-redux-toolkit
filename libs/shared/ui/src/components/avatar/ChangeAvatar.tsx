import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Avatar1 } from '../../assets/mocks';
import { StyledFormLabel } from '../input/Input.styled';
import { ValidationError } from '../validation-error';

import {
  ChangeAvatarBox,
  ChangeAvatarButton,
  ChangeAvatarInputStyled,
  ChangeAvatarWrapper,
} from './ChangeAvatar.styled';
import AvatarModal from '../avatar-modal/AvatarModal';
import { AvatarImages } from '../../assets/mocks/avatarImages';

const ChangeAvatar = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState<AvatarImages[]>(avatarImages);
  console.log('IMAGES: ', images);

  // const updatedImages = images.map((image) =>
  //   image.id === id ? { ...image, isSelected: true } : { ...image, isSelected: false },
  // );

  return (
    <>
      <ChangeAvatarWrapper>
        <StyledFormLabel>Avatar</StyledFormLabel>
        <ChangeAvatarBox>
          {/* <ChangeAvatarInputStyled type="image" name={props.name} src={Avatar1} ref={ref} value={Avatar1} {...props} /> */}

          {images.map((image) => {
            console.log('ONE BY ONE IMAGE: ', image);
            return (
              image.isSelected && (
                <ChangeAvatarInputStyled
                  key={image.id}
                  type="image"
                  name={props.name}
                  src={image.imgPath}
                  ref={ref}
                  value={image.imgPath}
                  {...props}
                />
              )
            );
          })}
        </ChangeAvatarBox>
        <ChangeAvatarButton type="button" onClick={() => setShowModal(true)}>
          Change avatar
        </ChangeAvatarButton>
        {showModal &&
          createPortal(
            <AvatarModal images={images} setImages={setImages} closeModal={() => setShowModal(false)} />,
            document.body,
          )}
      </ChangeAvatarWrapper>
      <ValidationError name={props.name} />
    </>
  );
});

ChangeAvatar.displayName = 'ChangeAvatar';
