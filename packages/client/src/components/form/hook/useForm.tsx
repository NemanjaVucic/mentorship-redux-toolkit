import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useHookForm, UseFormProps as UseHookFormProps } from 'react-hook-form';
import { TypeOf, ZodSchema } from 'zod';

interface IUseFormProps<T extends ZodSchema> extends UseHookFormProps<TypeOf<T>> {
  schema: T;
}

export const useForm = <T extends ZodSchema>({ schema, ...formConfig }: IUseFormProps<T>) => {
  return useHookForm({
    ...formConfig,
    resolver: zodResolver(schema),
  });
};
