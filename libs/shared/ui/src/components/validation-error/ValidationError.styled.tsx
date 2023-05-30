import styled from 'styled-components';

import { Color, font, space } from '../../variables';

export const ValidationErrorMessage = styled.p`
  color: ${Color.darkred};
  font-weight: ${font.weight.bold};
  margin-bottom: ${space.x4};
`;
