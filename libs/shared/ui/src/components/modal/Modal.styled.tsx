import { Color, space } from '@mentorship/shared/constants';
import styled from 'styled-components';

import { Button } from '../button';
import { CardButtonWrapper, DeleteButton } from '../card/Card.styled';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  background: ${Color.white};
  padding: ${space.x8};
  border: 2px solid ${Color.dodgerblue};
  border-radius: 5px;
  z-index: 2;
`;

export const ModalTitle = styled.h1``;

export const ModalBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${space.x3};
  margin: ${space.x4} 0;
`;

export const ModalButtonWrapper = styled(CardButtonWrapper)``;

export const ApplyButton = styled(Button)``;
export const CancelButton = styled(DeleteButton)``;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  backdrop-filter: blur(5px);
`;
