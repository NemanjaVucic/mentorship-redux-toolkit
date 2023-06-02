import { z } from 'zod';

import { createUserSchema } from '../create-user';

export const updateUserSchema = z.object({ data: createUserSchema.partial() }).merge(z.object({ id: z.number() }));
