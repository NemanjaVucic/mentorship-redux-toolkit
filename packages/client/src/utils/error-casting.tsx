import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { ZodError } from 'zod';

export const errorCasting = (
  error: FieldError | Merge<FieldError, FieldErrorsImpl<{ error: { message: string } }>>,
) => {
  let errorMessage: string | undefined;

  if (error instanceof ZodError) {
    if (error.issues.length > 0) {
      const issues = error.issues.map((issue) => issue.message);
      errorMessage = issues.join('\n');
    }
  }
  errorMessage = error.message;

  return errorMessage;
};
