import { Color, font, space } from '@mentorship/shared/constants';
import styled from 'styled-components';

import { ButtonProps } from './Button';

export const ButtonBaseStyles = styled.button<ButtonProps>`
  background: transparent;
  color: ${Color.dodgerblue};
  cursor: pointer;
  font-size: ${font.size.base};
  font-weight: ${font.weight.bold};
  padding: ${space.x3} ${space.x6};
  border: 2px solid ${Color.dodgerblue};
  border-radius: 5px;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
