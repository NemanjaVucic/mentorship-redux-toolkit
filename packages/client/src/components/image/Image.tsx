import { ImageBody, ImageWrapper } from './Image.styled';

export interface ImageProps {
  src: string;
  alt: string;
  height?: string;
  width?: string;
  borderRadius?: string;
}
const Image = ({ src, alt, height, width, borderRadius }: ImageProps) => {
  return (
    <>
      <ImageWrapper>
        <ImageBody
          src={src}
          alt={alt}
          height={height}
          width={width}
          borderRadius={borderRadius}
        />
      </ImageWrapper>
    </>
  );
};

export default Image;
