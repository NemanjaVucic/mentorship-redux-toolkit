import { space } from '@mentorship/shared/constants';
import styled from 'styled-components';

import { StyledFormControl } from '../input/Input.styled';

export const StyledTextAreaFormControl = styled(StyledFormControl)<{ $hasLabel: boolean }>`
  grid-template-columns: ${({ $hasLabel }) => `repeat(${$hasLabel ? '2' : '1'}, 1fr)`};
`;

export const StyledFormTextArea = styled.textarea`
  height: 100px;
  min-width: 189px;
  outline: none;
  border: 2px solid;
  padding: ${space.x2};
  border-radius: 5px;
  resize: none;
`;
