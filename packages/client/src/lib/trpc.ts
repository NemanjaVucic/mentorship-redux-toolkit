import { createTRPCReact } from '@trpc/react-query';
import type { inferProcedureOutput } from '@trpc/server';
// import superjson from 'superjson';
import type { AppRouter } from 'server';

export type UserList = inferProcedureOutput<AppRouter['user']['list']>;

export const trpc = createTRPCReact<AppRouter>();
