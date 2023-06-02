import { font, space } from '@mentorship/shared/constants';
import styled from 'styled-components';

export const Paragraph = styled.p`
  font-weight: ${font.weight.bold};
  max-width: 500px;
  margin: 0 auto ${space.x4};
`;
