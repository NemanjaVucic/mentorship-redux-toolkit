import styled from 'styled-components';

import { color, font } from '../../variables';

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
  ${(props) => `padding: ${props.padding}`};
  border: 2px solid ${color.dodgerblue};
  ${(props) =>
    props.border === 'dodgerBlue' ? `border: 2px solid ${color.dodgerblue}` : `border: 2px solid ${color.darkred}`};
  border-radius: 5px;
  transition: 0.25s ease-in-out;

  ${(props) => `justify-self: ${props.align};`}

  &:hover {
    transform: scale(1.1);
  }
`;
