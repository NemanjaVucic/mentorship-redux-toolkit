import { useZodForm } from '@mentorship/shared/hooks';
import { Form, Input, TextArea, ChangeAvatar, Button, Loader } from '@mentorship/shared/ui';
import { useCreateUsersMutation } from '@mentorship/users/data-access';
import { RoutePath } from '@mentorship/users/shared/constants';
import { UserCreateRequest } from '@mentorship/users/shared/models';
import { createUserSchema } from '@mentorship/users/shared/schema';
import { useNavigate } from 'react-router-dom';

import { UserFormButtonWrapper } from './CreatePage.styled';

export const CreatePage = () => {
  const [createUser, { isLoading }] = useCreateUsersMutation();
  const navigate = useNavigate();

  const form = useZodForm({
    schema: createUserSchema,
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleCreateUser = (user: UserCreateRequest) => {
    createUser(user);
    console.log('USER Avatar IS CREATED: ', user.avatar);
    navigate(RoutePath.home);
  };

  return (
    <Form form={form} onSubmit={handleCreateUser}>
      <Input label="First Name" {...form.register('firstName')} />
      <Input label="Last Name" {...form.register('lastName')} />
      <Input label="Email" {...form.register('email')} />
      <TextArea label="Bio" {...form.register('bio')} />
      <ChangeAvatar {...form.register('avatar')} />
      <UserFormButtonWrapper>
        <Button>Create User</Button>
      </UserFormButtonWrapper>
    </Form>
  );
};
