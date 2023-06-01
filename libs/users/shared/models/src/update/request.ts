import { AppRouter } from '@mentorship/users/server';
import type { inferProcedureInput } from '@trpc/server';

export type UserUpdateRequest = inferProcedureInput<AppRouter['user']['update']>;
