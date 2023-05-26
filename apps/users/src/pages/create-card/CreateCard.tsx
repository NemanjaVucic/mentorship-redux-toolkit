import { Form, Input, TextArea, ChangeAvatar, Button, useForm } from '@mentorship/shared/ui';
import { z } from 'zod';

import { CreateCardButtonWrapper } from './CreateCard.styled';

const createCardSchema = z.object({
  firstName: z.string().min(1, 'First Name must be at least 1 characters long!'),
  lastName: z.string().min(1, 'Last Name must be at least 1 characters long!'),
  email: z.string().email(),
  bio: z.string().optional(),
  avatar: z.string().min(1, 'You need to provide a path image!'),
});

export const CreateCard = () => {
  const form = useForm({
    schema: createCardSchema,
  });

  return (
    <Form form={form} onSubmit={(values) => console.log(values)}>
      <Input label="First Name" {...form.register('firstName')} />
      <Input label="Last Name" {...form.register('lastName')} />
      <Input label="Email" {...form.register('email')} />
      <TextArea label="Bio" {...form.register('bio')} />
      <ChangeAvatar {...form.register('avatar')} />
      <CreateCardButtonWrapper>
        <Button>Create Card</Button>
      </CreateCardButtonWrapper>
    </Form>
  );
};