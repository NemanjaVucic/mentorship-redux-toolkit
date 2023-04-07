import { ImageBody, ImageWrapper } from './Image.styled';

export interface ImgProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  borderRadius?: string;
}

const Image = ({ src, alt, height, width, borderRadius }: ImgProps) => {
  return (
    <>
      <ImageWrapper>
        <ImageBody src={src} alt={alt} height={height} width={width} borderRadius={borderRadius} />
      </ImageWrapper>
    </>
  );
};

export default Image;
