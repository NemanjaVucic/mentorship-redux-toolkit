import styled from 'styled-components';

import { space } from '../../../variables';

export const StyledFormTextArea = styled.textarea`
  height: 100px;
  min-width: 189px;
  outline: none;
  border: 2px solid;
  padding: ${space.x2};
  border-radius: 5px;
  resize: none;
`;
