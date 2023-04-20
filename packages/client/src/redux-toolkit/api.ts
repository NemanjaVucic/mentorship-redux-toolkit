import { createApi } from '@reduxjs/toolkit/query/react';

import { UserList, trpc } from '../lib/trpc';

export const api = createApi({
  baseQuery: (trpcResult: Promise<unknown>) => trpcResult.then((data) => ({ data })).catch((error) => ({ error })),
  endpoints: (builder) => ({
    getUsers: builder.query<UserList, void>({
      query: trpc.user.list.query,
    }),
  }),
});

export const { useGetUsersQuery } = api;
