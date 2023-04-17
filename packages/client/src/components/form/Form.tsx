import { ComponentPropsWithoutRef } from 'react';
import { FormProvider, UseFormReturn, FieldValues, SubmitHandler } from 'react-hook-form';

import { StyledForm, StyledFormContainer, StyledFormWrapper } from './Form.styled';

export interface IFormProps<T extends FieldValues> extends Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

const Form = <T extends FieldValues>({ form, onSubmit, children, ...props }: IFormProps<T>) => {
  return (
    <FormProvider {...form}>
      <StyledFormContainer>
        <StyledForm onSubmit={form.handleSubmit(onSubmit)} {...props}>
          <StyledFormWrapper>{children}</StyledFormWrapper>
        </StyledForm>
      </StyledFormContainer>
    </FormProvider>
  );
};

export default Form;
