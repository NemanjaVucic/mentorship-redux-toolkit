import {
  UserCreateRequest,
  UserCreateResponse,
  UserListRequest,
  UserListResponse,
} from '@mentorship/users/shared/models';
import { createApi } from '@reduxjs/toolkit/query/react';

import { trpc } from './trpc/trpc-proxy-client';

export const api = createApi({
  baseQuery: (trpcResult: Promise<unknown>) => trpcResult.then((data) => ({ data })).catch((error) => ({ error })),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<UserListResponse, UserListRequest>({
      query: trpc.user.list.query,
      providesTags: ['Users'],
    }),
    createUsers: builder.mutation<UserCreateResponse, UserCreateRequest>({
      query: trpc.user.create.mutate,
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useCreateUsersMutation } = api;
