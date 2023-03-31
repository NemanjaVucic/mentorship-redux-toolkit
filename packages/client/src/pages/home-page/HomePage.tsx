import { trpc } from '../../lib/trpc';

export const HomePage = () => {
  const { data, isError, isLoading } = trpc.user.list.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <h1>This is a Home page</h1>
      {JSON.stringify(data, null, 2)}
    </>
  );
};
