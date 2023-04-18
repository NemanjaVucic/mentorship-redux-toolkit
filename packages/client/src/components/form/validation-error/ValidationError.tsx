import { useFormContext } from 'react-hook-form';

import { errorCasting } from '../../../utils/error-casting';

import { ValidationErrorMessage } from './ValidationError.styled';

const ValidationError = ({ name }: { name?: string }) => {
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) return null;

  const error = errors[name];

  if (!error) return null;

  return <ValidationErrorMessage>{errorCasting(error)}</ValidationErrorMessage>;
};

export default ValidationError;
