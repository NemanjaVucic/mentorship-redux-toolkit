import { api } from './../../redux-toolkit/api';

export const HomePage = () => {
  const { useGetUsersQuery } = api;

  const { data: users, isLoading, isError } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <h1>This is a Home page</h1>
      {JSON.stringify(users, null, 2)}
    </>
  );
};
