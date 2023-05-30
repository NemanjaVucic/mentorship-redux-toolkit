import { space } from '@mentorship/shared/variables';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${space.x5};
`;
