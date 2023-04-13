import styled from 'styled-components';

import { ButtonBaseStyles } from '../../button/Button.styled';

export const StyledButtonWrapper = styled.div`
  display: grid;
`;

export const StyledFormButton = styled(ButtonBaseStyles)`
  justify-self: end;
`;
