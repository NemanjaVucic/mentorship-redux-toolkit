import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormProps as UseHookFormProps } from 'react-hook-form';
import { TypeOf, ZodSchema, z } from 'zod';

// interface IUseFormProps<T extends ZodSchema> extends UseHookFormProps<TypeOf<T>> {
//   schema: T;
// }

// export const useForm = <T extends ZodSchema>({ schema, ...formConfig }: IUseFormProps<T>) => {
//   return useHookForm({
//     ...formConfig,
//     resolver: zodResolver(schema),
//   });
// };

type UseFormProps<TSchema extends z.ZodType> = Omit<UseHookFormProps<TSchema['_input']>, 'resolver'> & {
  schema: TSchema;
};

export const useZodForm = <T extends z.ZodType>(props: UseFormProps<T>) => {
  const form = useForm<T['_input']>({
    ...props,
    resolver: zodResolver(props.schema, undefined),
  });

  return form;
};
