import { useZodForm } from '@mentorship/shared/hooks';
import { Form, Input, TextArea, ChangeAvatar, Button } from '@mentorship/shared/ui';
import { useCreateUsersMutation } from '@mentorship/users/data-access';
import { RoutePath } from '@mentorship/users/shared/constants';
import { createUserSchema } from '@mentorship/users/shared/schema';
import { useNavigate } from 'react-router-dom';

import { CreateCardButtonWrapper } from './CreatePage.styled';

export const CreatePage = () => {
  const [createUser, result] = useCreateUsersMutation();
  console.log('CREATE USER: ', createUser);
  console.log('RESULT: ', result);
  const navigate = useNavigate();

  const form = useZodForm({
    schema: createUserSchema,
  });

  const handleCreateUser = (user: any) => {
    createUser(user);
    console.log('USER CREATED: ', user);
    navigate(RoutePath.home);
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
