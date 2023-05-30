import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';

import { avatarImages } from '../../assets/mocks/avatarImages';
import { AvatarModal } from '../avatar-modal/AvatarModal';
import { StyledFormLabel } from '../input/Input.styled';
import { ValidationError } from '../validation-error';

import {
  ChangeAvatarBox,
  ChangeAvatarButton,
  ChangeAvatarInputStyled,
  ChangeAvatarWrapper,
} from './ChangeAvatar.styled';

export const ChangeAvatar = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>((props, ref) => {
  const defaultAvatarId = avatarImages[0].id;
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(defaultAvatarId);
  const [appliedId, setAppliedId] = useState(defaultAvatarId);

  const openModal = () => {
    setShowModal(true);
  };

  const handleApplyId = (id: number) => {
    setSelectedId(id);
    setAppliedId(id);
  };

  return (
    <>
      <ChangeAvatarWrapper>
        <StyledFormLabel>Avatar</StyledFormLabel>
        <ChangeAvatarBox>
          {avatarImages.map(
            (image) =>
              selectedId === image.id && (
                <ChangeAvatarInputStyled
                  key={image.id}
                  type="image"
                  name={props.name}
                  src={image.imgPath}
                  ref={ref}
                  value={image.imgPath}
                  {...props}
                />
              ),
          )}
        </ChangeAvatarBox>
        <ChangeAvatarButton type="button" onClick={openModal}>
          Change avatar
        </ChangeAvatarButton>
        <AvatarModal
          avatarImages={avatarImages}
          showModal={showModal}
          setShowModal={setShowModal}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          appliedId={appliedId}
          onApplyId={handleApplyId}
        />
      </ChangeAvatarWrapper>
      <ValidationError name={props.name} />
    </>
  );
});

ChangeAvatar.displayName = 'ChangeAvatar';
