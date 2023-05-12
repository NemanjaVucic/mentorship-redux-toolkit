import { z } from 'zod';

import ChangeAvatar from '../../components/avatar/ChangeAvatar';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import { useForm } from '../../components/form/hook/useForm';
import Input from '../../components/form/input/Input';
import TextArea from '../../components/form/text-area/TextArea';

const createCardSchema = z.object({
  firstName: z.string().min(1, 'First Name must be at least 1 characters long!'),
  lastName: z.string().min(1, 'Last Name must be at least 1 characters long!'),
  email: z.string().email(),
  textarea: z.string().optional(),
});

export const CreateCard = () => {
  const form = useForm({
    schema: createCardSchema,
  });

  return (
    <>
      <Form form={form} onSubmit={(values) => console.log(values)}>
        <Input label="First Name" {...form.register('firstName')} />
        <Input label="Last Name" {...form.register('lastName')} />
        <Input label="Email" {...form.register('email')} />
        <TextArea {...form.register('textarea')} />
        <ChangeAvatar />
        <Button align="end">Create Card</Button>
      </Form>
    </>
  );
};
