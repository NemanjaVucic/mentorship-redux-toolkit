import { AvatarImages } from '../../assets/mocks/avatarImages';
import { Modal } from '../modal/Modal';

import { AvatarImage } from './AvatarModal.styled';

interface AvatarModalProps {
  avatarImages: AvatarImages[];
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  selectedId: number;
  setSelectedId: (id: number) => void;
  appliedId: number;
  onApplyId: (id: number) => void;
}

export const AvatarModal = ({
  avatarImages,
  showModal,
  setShowModal,
  selectedId,
  setSelectedId,
  appliedId,
  onApplyId,
}: AvatarModalProps) => {
  const handleApply = () => {
    onApplyId(selectedId);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedId(appliedId);
    onApplyId(appliedId);
  };

  const handleImageClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <Modal
      title="Change Avatar"
      isShowing={showModal}
      setIsShowing={setShowModal}
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
