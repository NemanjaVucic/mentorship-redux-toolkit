import styled from 'styled-components';

import { space } from '../../variables';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${space.x5};
`;
