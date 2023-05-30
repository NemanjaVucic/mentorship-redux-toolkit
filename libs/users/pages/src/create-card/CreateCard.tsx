import { Form, Input, TextArea, ChangeAvatar, Button, useForm } from '@mentorship/shared/ui';
// import { useCreateUsersMutation } from '@mentorship/users/data-access';
import { RoutePath } from '@mentorship/users/shared';
import { useNavigate } from 'react-router-dom';
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
  // const [createUser, result] = useCreateUsersMutation();
  const navigate = useNavigate();

  const form = useForm({
    schema: createCardSchema,
  });

  const handleCreateUser = async (user: any) => {
    try {
      // await createUser(user);
      navigate(RoutePath.home);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form form={form} onSubmit={handleCreateUser}>
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
