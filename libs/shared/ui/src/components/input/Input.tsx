import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { ValidationError } from '../validation-error';

import { StyledFormControl, StyledFormInput, StyledFormLabel } from './Input.styled';

export interface IInputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(({ label, type = 'text', ...props }, ref) => {
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

Input.displayName = 'Input';
