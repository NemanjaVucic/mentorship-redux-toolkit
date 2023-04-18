import styled from 'styled-components';

import { color, font, space } from '../../variables';

import { ButtonProps } from './Button';

export const ButtonBaseStylesWrapper = styled.div`
  display: grid;
`;

export const ButtonBaseStyles = styled.button<ButtonProps>`
  background: transparent;
  color: ${color.dodgerblue};
  ${(props) => (props.color === 'dodgerBlue' ? `color: ${color.dodgerblue}` : `color: ${color.darkred}`)};
  cursor: pointer;
  font-size: ${font.size.base};
  font-weight: ${font.weight.bold};
  padding: ${space.x3} ${space.x6};
  border: 2px solid ${color.dodgerblue};
  ${(props) =>
    props.border === 'dodgerBlue' ? `border: 2px solid ${color.dodgerblue}` : `border: 2px solid ${color.darkred}`};
  border-radius: 5px;
  transition: 0.25s ease-in-out;

  ${(props) =>
    props.align &&
    `
    justify-self: ${props.align};
  `}

  &:hover {
    transform: scale(1.1);
  }
`;
