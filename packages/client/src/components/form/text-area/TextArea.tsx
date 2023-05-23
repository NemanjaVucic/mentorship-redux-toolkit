import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { StyledFormLabel } from '../input/Input.styled';

import { StyledFormTextArea, StyledTextAreaFormControl } from './TextArea.styled';

export interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  label?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label, ...props }, ref) => {
  const hasLabel = !!label;
  return (
    <StyledTextAreaFormControl hasLabel={hasLabel}>
      {hasLabel && <StyledFormLabel>{label}</StyledFormLabel>}
      <StyledFormTextArea ref={ref} {...props} />
    </StyledTextAreaFormControl>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
