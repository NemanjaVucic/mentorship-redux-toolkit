import Avatar1 from '../../assets/mocks/avatar1.jpg';
import Button from '../button/Button';
import { StyledFormLabel } from '../form/input/Input.styled';
import Image from '../image/Image';

import { ChangeAvatarBox, ChangeAvatarWrapper } from './ChangeAvatar.styled';

const ChangeAvatar = () => {
  return (
    <ChangeAvatarWrapper>
      <StyledFormLabel>Avatar</StyledFormLabel>
      <ChangeAvatarBox>
        <Image src={Avatar1} height="45px" width="45px" />
      </ChangeAvatarBox>
      <Button padding="8px">Change avatar</Button>
    </ChangeAvatarWrapper>
  );
};

export default ChangeAvatar;
