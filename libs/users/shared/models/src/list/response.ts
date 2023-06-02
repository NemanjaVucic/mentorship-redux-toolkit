import { AppRouter } from '@mentorship/users/server';
import type { inferProcedureOutput } from '@trpc/server';

export type UserListResponse = inferProcedureOutput<AppRouter['user']['list']>;
