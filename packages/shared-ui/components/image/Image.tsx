import { TImage } from '../../types';

import { ImageBody, ImageWrapper } from './Image.styled';

export const Image = ({ src, alt, height, width, borderRadius }: TImage) => {
  return (
    <>
      <ImageWrapper>
        <ImageBody src={src} alt={alt} height={height} width={width} borderRadius={borderRadius} />
      </ImageWrapper>
    </>
  );
};
