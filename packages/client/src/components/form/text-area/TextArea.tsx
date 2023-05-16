import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { StyledFormControl, StyledFormLabel } from '../input/Input.styled';

import { StyledFormTextArea } from './TextArea.styled';

export interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  label?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label, ...props }, ref) => {
  return label ? (
    <StyledFormControl>
      <StyledFormLabel>{label}</StyledFormLabel>
      <StyledFormTextArea ref={ref} {...props} />
    </StyledFormControl>
  ) : null;
});

TextArea.displayName = 'TextArea';

export default TextArea;
