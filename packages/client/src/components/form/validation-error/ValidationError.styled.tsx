import styled from 'styled-components';

import { color, font, space } from '../../../variables';

export const ValidationErrorMessage = styled.p`
  color: ${color.darkred};
  font-weight: ${font.weight.bold};
  margin-bottom: ${space.x4};
`;
