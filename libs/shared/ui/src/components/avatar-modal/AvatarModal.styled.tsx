import styled from 'styled-components';

import { color, space } from '../../../variables';
import { CardButtonWrapper } from '../../card/Card.styled';
import { ImageBody } from '../../image/Image.styled';

export const AvatarModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  background: ${color.white};
  padding: ${space.x8};
  border: 2px solid ${color.dodgerblue};
  border-radius: 5px;
  z-index: 2;
`;

export const AvatarTitle = styled.h1``;

export const AvatarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${space.x3};
  margin: ${space.x4} 0;
`;

export const AvatarImage = styled(ImageBody)`
  position: static;
  border: 2px solid ${color.gray};
  transition: 0.35s ease-in-out;

  &:hover {
    transform: scale(1.6);
    cursor: pointer;
  }
  &:active {
    border: 2px solid ${color.dodgerblue};
    transform: scale(1.2);
  }
`;

export const AvatarButtonWrapper = styled(CardButtonWrapper)``;

export const AvatarOverlay = styled.div`
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
