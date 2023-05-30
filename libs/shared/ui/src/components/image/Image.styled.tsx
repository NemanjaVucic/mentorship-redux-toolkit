import { space } from '@mentorship/shared/variables';
import styled from 'styled-components';

import { TImage } from '../../types';

export const ImageWrapper = styled.div`
  margin-bottom: ${space.x3};
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
`;

export const ImageBody = styled.img<TImage>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  object-fit: cover;
  border-radius: ${({ borderRadius = '5px' }) => borderRadius};
`;
