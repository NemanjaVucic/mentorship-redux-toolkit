import { AppRouter } from '@mentorship/users/server';
import type { inferProcedureInput } from '@trpc/server';

export type UserListRequest = inferProcedureInput<AppRouter['user']['list']>;
