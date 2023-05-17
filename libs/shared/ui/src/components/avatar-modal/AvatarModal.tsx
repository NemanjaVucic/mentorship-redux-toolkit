import { avatarImages } from '../../../assets/mocks/avatarImages';
import Button from '../../button/Button';
import { DeleteButton } from '../../card/Card.styled';

import {
  AvatarModalWrapper,
  AvatarButtonWrapper,
  AvatarOverlay,
  AvatarTitle,
  AvatarBody,
  AvatarImage,
} from './AvatarModal.styled';

interface AvatarModalProps {
  closeModal: () => void;
}

const AvatarModal = ({ closeModal }: AvatarModalProps) => {
  return (
    <>
      <AvatarOverlay onClick={closeModal} />
      <AvatarModalWrapper>
        <AvatarTitle>Select Avatar</AvatarTitle>
        <AvatarBody>
          {avatarImages.map((avatarImage) => (
            <AvatarImage
              key={avatarImage.id}
              src={avatarImage.imgPath}
              alt={avatarImage.imgPath}
              height="70px"
              width="70px"
            />
          ))}
        </AvatarBody>
        <AvatarButtonWrapper>
          <Button>Apply</Button>
          <DeleteButton onClick={closeModal}>Cancel</DeleteButton>
        </AvatarButtonWrapper>
      </AvatarModalWrapper>
    </>
  );
};

export default AvatarModal;
