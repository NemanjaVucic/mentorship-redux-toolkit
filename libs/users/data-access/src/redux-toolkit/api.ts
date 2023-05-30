import { User } from '@prisma/client';
import { createApi } from '@reduxjs/toolkit/query/react';

import { UserList, trpc } from './trpc/trpc-proxy-client';

export const api = createApi({
  baseQuery: (trpcResult: Promise<unknown>) => trpcResult.then((data) => ({ data })).catch((error) => ({ error })),
  endpoints: (builder) => ({
    getUsers: builder.query<UserList, void>({
      query: trpc.user.list.query,
    }),
    // createUsers: builder.mutation<User, User>({
    //   query: trpc.user.create.mutate,
    // }),
  }),
});

export const {
  useGetUsersQuery,
  //  useCreateUsersMutation
} = api;
