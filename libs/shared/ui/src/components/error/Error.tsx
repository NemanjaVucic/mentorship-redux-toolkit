import NoContent from '../../assets/no-content.jpg';
import { Image } from '../image/Image';

import { ErrorImageContainer, ErrorMessage } from './Error.styled';

export const Error = () => {
  return (
    <ErrorImageContainer>
      <ErrorMessage>The information you are trying to reach are currently unavailable...</ErrorMessage>
      <Image src={NoContent} alt="no-content" />
    </ErrorImageContainer>
  );
};
