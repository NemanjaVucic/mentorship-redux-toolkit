import { useGetUsersQuery } from '@mentorship/users/data-access';
import { Card, Loader, Error } from '@mentorship/shared/ui';

import { CardWrapper } from './HomePage.styled';

export const HomePage = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <CardWrapper>
      {users?.map((user) => (
        <Card key={user.id} firstName={user.firstName} lastName={user.lastName} avatar={user.avatar} />
      ))}
    </CardWrapper>
  );
};
