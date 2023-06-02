import { AppRouter } from '@mentorship/users/server';
import type { inferProcedureInput } from '@trpc/server';

export type UserDeleteRequest = inferProcedureInput<AppRouter['user']['delete']>;
