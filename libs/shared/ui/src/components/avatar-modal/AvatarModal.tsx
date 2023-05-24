// import { useState } from 'react';

import { Dispatch, SetStateAction } from 'react';

import {
  AvatarModalWrapper,
  AvatarButtonWrapper,
  AvatarOverlay,
  AvatarTitle,
  AvatarBody,
  AvatarImage,
} from './AvatarModal.styled';
import { AvatarImages } from '../../assets/mocks/avatarImages';
import { Button } from '../button';
import { DeleteButton } from '../card/Card.styled';

interface AvatarModalProps {
  closeModal: () => void;
  images: AvatarImages[];
  setImages: Dispatch<SetStateAction<AvatarImages[]>>;
}

const AvatarModal = ({ closeModal, images, setImages }: AvatarModalProps) => {
  // const [images, setImages] = useState<AvatarImages[]>(avatarImages);

  const handleImageClick = (id: number) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, isSelected: true } : { ...image, isSelected: false },
    );
    setImages(updatedImages);
  };

  return (
    <>
      <AvatarOverlay onClick={closeModal} />
      <AvatarModalWrapper>
        <AvatarTitle>Select Avatar</AvatarTitle>
        <AvatarBody>
          {images.map((avatarImage) => {
            // console.log('avatarImage', avatarImage);
            return (
              <AvatarImage
                isSelected={avatarImage.isSelected}
                key={avatarImage.id}
                src={avatarImage.imgPath}
                alt={avatarImage.imgPath}
                height="70px"
                width="70px"
                onClick={() => handleImageClick(avatarImage.id)}
              />
            );
          })}
        </AvatarBody>
        <AvatarButtonWrapper>
          <Button
            onClick={() => {
              // console.log(images);
              // setImages(images);
              closeModal();
            }}
          >
            Apply
          </Button>
          <DeleteButton onClick={closeModal}>Cancel</DeleteButton>
        </AvatarButtonWrapper>
      </AvatarModalWrapper>
    </>
  );
};

export default AvatarModal;
