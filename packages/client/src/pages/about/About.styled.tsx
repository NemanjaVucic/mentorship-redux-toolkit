import styled from 'styled-components';

import { font, space } from '../../variables';

export const Paragraph = styled.p`
  font-weight: ${font.weight.bold};
  max-width: 500px;
  margin: 0 auto ${space.x4};
`;
