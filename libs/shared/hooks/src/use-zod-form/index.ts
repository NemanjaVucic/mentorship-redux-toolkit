import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormProps as UseHookFormProps } from 'react-hook-form';
import { z } from 'zod';

type UseFormProps<TSchema extends z.ZodType> = Omit<UseHookFormProps<TSchema['_input']>, 'resolver'> & {
  schema: TSchema;
};

export const useZodForm = <T extends z.ZodType>(props: UseFormProps<T>) => {
  const form = useForm<T['_input']>({
    ...props,
    resolver: zodResolver(props.schema),
  });

  return form;
};
