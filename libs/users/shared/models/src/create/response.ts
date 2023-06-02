import { AppRouter } from '@mentorship/users/server';
import type { inferProcedureOutput } from '@trpc/server';

export type UserCreateResponse = inferProcedureOutput<AppRouter['user']['create']>;
