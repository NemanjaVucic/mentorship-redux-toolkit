import type { AppRouter } from '@mentorship-redux-toolkit/server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/react-query';
import type { inferProcedureOutput } from '@trpc/server';
import superjson from 'superjson';

export type UserList = inferProcedureOutput<AppRouter['user']['list']>;

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});
