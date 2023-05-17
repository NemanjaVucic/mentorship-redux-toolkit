import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Avatar1 } from '../../assets/mocks';
import { StyledFormLabel } from '../input/Input.styled';
import { ValidationError } from '../validation-error';

import {
  ChangeAvatarBox,
  ChangeAvatarButton,
  ChangeAvatarInputStyled,
  ChangeAvatarWrapper,
} from './ChangeAvatar.styled';
import AvatarModal from '../avatar-modal/AvatarModal';

const ChangeAvatar = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>((props, ref) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ChangeAvatarWrapper>
        <StyledFormLabel>Avatar</StyledFormLabel>
        <ChangeAvatarBox>
          <ChangeAvatarInputStyled type="image" name={props.name} src={Avatar1} ref={ref} value={Avatar1} {...props} />
        </ChangeAvatarBox>
        <ChangeAvatarButton type="button" onClick={() => setShowModal(true)}>
          Change avatar
        </ChangeAvatarButton>
        {showModal && createPortal(<AvatarModal closeModal={() => setShowModal(false)} />, document.body)}
      </ChangeAvatarWrapper>
      <ValidationError name={props.name} />
    </>
  );
});

ChangeAvatar.displayName = 'ChangeAvatar';
