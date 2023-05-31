import { AvatarImages } from '../../assets/mocks/avatarImages';
import { Modal } from '../modal/Modal';

import { AvatarImage } from './AvatarModal.styled';

interface AvatarModalProps {
  avatarImages: AvatarImages[];
  showModal: boolean;
  onShowModal: (showModal: boolean) => void;
  selectedId: number;
  onSelectedId: (id: number) => void;
  appliedId: number;
  onApplyId: (id: number) => void;
}

export const AvatarModal = ({
  avatarImages,
  showModal,
  onShowModal,
  selectedId,
  onSelectedId,
  appliedId,
  onApplyId,
}: AvatarModalProps) => {
  const handleApply = () => {
    onApplyId(selectedId);
    onShowModal(false);
  };

  const handleCancel = () => {
    onShowModal(false);
    onSelectedId(appliedId);
    onApplyId(appliedId);
  };

  const handleImageClick = (id: number) => {
    onSelectedId(id);
  };

  return (
    <Modal
      title="Change Avatar"
      isShowing={showModal}
      onShowModal={onShowModal}
      onApply={handleApply}
      onCancel={handleCancel}
    >
      {avatarImages.map((avatarImage) => (
        <AvatarImage
          $isSelected={selectedId === avatarImage.id}
          key={avatarImage.id}
          src={avatarImage.imgPath}
          alt={avatarImage.imgPath}
          height="70px"
          width="70px"
          onClick={() => handleImageClick(avatarImage.id)}
        />
      ))}
    </Modal>
  );
};
