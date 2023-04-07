import styled from 'styled-components';

import { space } from '../../variables';

import { ImgProps } from './Image';

export const ImageWrapper = styled.div`
  margin-bottom: ${space.x3};
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
`;

export const ImageBody = styled.img<ImgProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  object-fit: cover;
  border-radius: ${({ borderRadius = '5px' }) => borderRadius};
`;
