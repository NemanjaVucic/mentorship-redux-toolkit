import { Color, font, space } from '@mentorship/shared/variables';
import styled from 'styled-components';

export const ValidationErrorMessage = styled.p`
  color: ${Color.darkred};
  font-weight: ${font.weight.bold};
  margin-bottom: ${space.x4};
`;
