import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { Avatar1 } from '../../assets/mocks';
import { StyledFormLabel } from '../input/Input.styled';
import { ValidationError } from '../validation-error';

import {
  ChangeAvatarBox,
  ChangeAvatarButton,
  ChangeAvatarInputStyled,
  ChangeAvatarWrapper,
} from './ChangeAvatar.styled';

export const ChangeAvatar = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>((props, ref) => {
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
