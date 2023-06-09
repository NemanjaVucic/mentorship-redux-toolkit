import { createPortal } from 'react-dom';

import {
  ModalBody,
  ModalButtonWrapper,
  ModalWrapper,
  ModalOverlay,
  ModalTitle,
  ApplyButton,
  CancelButton,
} from './Modal.styled';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isShowing: boolean;
  onShowModal: (isShowing: boolean) => void;
  onApply: () => void;
  onCancel: () => void;
}

export const Modal = ({ title, children, isShowing, onShowModal, onApply, onCancel }: ModalProps) => {
  const closeModal = () => {
    onShowModal(false);
  };

  const handleOverlayClick = () => {
    closeModal();
  };

  const handleApply = () => {
    onApply();
    closeModal();
  };

  const handleCancel = () => {
    onCancel();
    closeModal();
  };

  return isShowing
    ? createPortal(
        <>
          <ModalOverlay onClick={handleOverlayClick} />
          <ModalWrapper>
            <ModalTitle>{title}</ModalTitle>
            <ModalBody>{children}</ModalBody>
            <ModalButtonWrapper>
              <ApplyButton onClick={handleApply}>Apply</ApplyButton>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            </ModalButtonWrapper>
          </ModalWrapper>
        </>,
        document.body,
      )
    : null;
};
