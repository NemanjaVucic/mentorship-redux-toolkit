import styled from 'styled-components';

import { font, space } from '../../../variables';

export const StyledFormControl = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space.x4};
`;

export const StyledFormLabel = styled.label`
  font-size: ${font.size.large};
  font-weight: ${font.weight.bold};
  margin-right: ${space.x4};
  flex: 1;
`;

export const StyledFormInput = styled.input`
  flex: 1;
  outline: none;
  border: 2px solid;
  padding: ${space.x2};
  border-radius: 5px;
`;
