import { ComponentProps, forwardRef } from 'react';

import ValidationError from '../validation-error/ValidationError';

import { StyledFormControl, StyledFormInput, StyledFormLabel } from './Input.styled';

export interface IInputProps extends ComponentProps<'input'> {
  label: string;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, IInputProps>(({ label, type = 'text', ...props }, ref) => {
  return (
    <>
      <StyledFormControl>
        <StyledFormLabel htmlFor={props.name}>{label}</StyledFormLabel>
        <StyledFormInput type={type} ref={ref} {...props} />
      </StyledFormControl>
      <ValidationError name={props.name} />
    </>
  );
});

export default Input;
