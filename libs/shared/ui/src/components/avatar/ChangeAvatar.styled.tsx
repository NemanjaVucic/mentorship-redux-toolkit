import styled from 'styled-components';

import { Color, space } from '../../variables';
import { ButtonBaseStyles } from '../button/Button.styled';
import { StyledFormControl, StyledFormInput } from '../input/Input.styled';

export const ChangeAvatarWrapper = styled(StyledFormControl)`
  grid-template-columns: repeat(3, 1fr);
`;

export const ChangeAvatarBox = styled.div`
  width: 45px;
  height: 45px;
  margin-right: ${space.x4};
  transition: 0.35s ease-in-out;

  &:hover {
    transform: scale(1.6);
    cursor: pointer;
  }
`;

export const ChangeAvatarInputStyled = styled(StyledFormInput)`
  padding: 0;
  width: 100%;
  border: 2px solid ${Color.dodgerblue};
`;

export const ChangeAvatarButton = styled(ButtonBaseStyles)`
  padding: ${space.x2};
`;
