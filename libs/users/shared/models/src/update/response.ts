import { AppRouter } from '@mentorship/users/server';
import type { inferProcedureOutput } from '@trpc/server';

export type UserUpdateResponse = inferProcedureOutput<AppRouter['user']['update']>;
