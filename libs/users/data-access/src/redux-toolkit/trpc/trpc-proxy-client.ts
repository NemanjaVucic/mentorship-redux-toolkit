import type { AppRouter } from '@mentorship/users/server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/react-query';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});
