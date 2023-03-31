import { createApi } from '@reduxjs/toolkit/query/react';
import { trpcClient, UserList } from '../lib/trpc';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: (trpcResult: Promise<unknown>) => trpcResult.then((data) => ({ data })).catch((error) => ({ error })),
  endpoints: (builder) => ({
    getUsers: builder.query<UserList, void>({
      query: trpcClient.user.list.query,
    }),
  }),
});
