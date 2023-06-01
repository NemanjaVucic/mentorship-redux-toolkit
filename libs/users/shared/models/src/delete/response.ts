import { AppRouter } from '@mentorship/users/server';
import type { inferProcedureOutput } from '@trpc/server';

export type UserDeleteResponse = inferProcedureOutput<AppRouter['user']['delete']>;
