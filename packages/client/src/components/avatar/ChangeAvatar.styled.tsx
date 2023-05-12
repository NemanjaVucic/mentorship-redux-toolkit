import styled from 'styled-components';

import { space } from '../../variables';
import { StyledFormControl } from '../form/input/Input.styled';

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
