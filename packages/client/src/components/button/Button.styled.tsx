import styled from 'styled-components';

import { color, font, space } from '../../variables';

import { ButtonProps } from './Button';

export const ButtonBaseStyles = styled.button<ButtonProps>`
  background: transparent;
  color: ${color.dodgerblue};
  cursor: pointer;
  font-size: ${font.size.base};
  font-weight: ${font.weight.bold};
  padding: ${space.x3} ${space.x6};
  border: 2px solid ${color.dodgerblue};
  border-radius: 5px;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
