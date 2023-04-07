import { TImage } from '../../../types/image';

import { ImageBody, ImageWrapper } from './Image.styled';

const Image = ({ src, alt, height, width, borderRadius }: TImage) => {
  return (
    <>
      <ImageWrapper>
        <ImageBody src={src} alt={alt} height={height} width={width} borderRadius={borderRadius} />
      </ImageWrapper>
    </>
  );
};

export default Image;
