import Card from '../../components/card/Card';
import Error from '../../components/error/Error';
import Loader from '../../components/loader/Loader';
import { useGetUsersQuery } from '../../redux-toolkit/api';

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
