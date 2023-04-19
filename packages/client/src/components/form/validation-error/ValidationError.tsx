import { useFormContext } from 'react-hook-form';

import { errorCasting } from '../../../utils/error-casting';

import { ValidationErrorMessage } from './ValidationError.styled';

const ValidationError = ({ name = '' }: { name?: string }) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  if (!error) return null;

  return <ValidationErrorMessage>{errorCasting(error)}</ValidationErrorMessage>;
};

export default ValidationError;
