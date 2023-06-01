import { AppRouter } from '@mentorship/users/server';
import type { inferProcedureInput } from '@trpc/server';

export type UserCreateRequest = inferProcedureInput<AppRouter['user']['create']>;
