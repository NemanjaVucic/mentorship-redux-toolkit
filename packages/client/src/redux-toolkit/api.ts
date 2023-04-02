import { createApi } from '@reduxjs/toolkit/query/react';
import { trpc, UserList } from '../lib/trpc';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: (trpcResult: Promise<unknown>) => trpcResult.then((data) => ({ data })).catch((error) => ({ error })),
  endpoints: (builder) => ({
    getUsers: builder.query<UserList, void>({
      query: trpc.user.list.query,
    }),
  }),
});