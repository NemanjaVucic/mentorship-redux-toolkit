import { TextareaHTMLAttributes, forwardRef } from 'react';

import { StyledFormControl, StyledFormLabel } from '../input/Input.styled';

import { StyledFormTextArea } from './TextArea.styled';

const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>((props, ref) => {
  return (
    <>
      <StyledFormControl>
        <StyledFormLabel>Bio</StyledFormLabel>
        <StyledFormTextArea ref={ref} {...props} />
      </StyledFormControl>
    </>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
