import type { AppRouter } from '@mentorship/server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/react-query';
import type { inferProcedureOutput } from '@trpc/server';

export type UserList = inferProcedureOutput<AppRouter['user']['list']>;

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});
