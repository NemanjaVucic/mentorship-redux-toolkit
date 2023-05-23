import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { Avatar1 } from '../../assets/mocks';
import { StyledFormLabel } from '../form/input/Input.styled';
import ValidationError from '../form/validation-error/ValidationError';

import {
  ChangeAvatarBox,
  ChangeAvatarButton,
  ChangeAvatarInputStyled,
  ChangeAvatarWrapper,
} from './ChangeAvatar.styled';

const ChangeAvatar = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>((props, ref) => {
  return (
    <>
      <ChangeAvatarWrapper>
        <StyledFormLabel>Avatar</StyledFormLabel>
        <ChangeAvatarBox>
          <ChangeAvatarInputStyled type="image" name={props.name} src={Avatar1} ref={ref} value={Avatar1} {...props} />
        </ChangeAvatarBox>
        <ChangeAvatarButton>Change avatar</ChangeAvatarButton>
      </ChangeAvatarWrapper>
      <ValidationError name={props.name} />
    </>
  );
});

ChangeAvatar.displayName = 'ChangeAvatar';

export default ChangeAvatar;
