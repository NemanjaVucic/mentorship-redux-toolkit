import { Card } from '@mentorship/shared-ui';

import { CardWrapper } from './HomePage.styled';

// import { api } from './../../redux-toolkit/api';

export const HomePage = () => {
  // TODO: Replace mocked data with users from  the API.

  // const { useGetUsersQuery } = api;

  // const { data: users, isLoading, isError } = useGetUsersQuery();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error</div>;
  // }

  return (
    <>
      {/* {JSON.stringify(users, null, 2)} */}
      <CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardWrapper>
    </>
  );
};
