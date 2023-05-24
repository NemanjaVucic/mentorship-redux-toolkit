import { errorCasting } from '@mentorship/shared/utils';
import { useFormContext } from 'react-hook-form';

import { ValidationErrorMessage } from './ValidationError.styled';

export const ValidationError = ({ name = '' }: { name?: string }) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  if (!error) return null;

  return <ValidationErrorMessage>{errorCasting(error)}</ValidationErrorMessage>;
};
