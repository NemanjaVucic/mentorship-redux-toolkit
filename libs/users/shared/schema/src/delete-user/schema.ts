import { z } from 'zod';

export const deleteUserSchema = z.object({ id: z.number() });

export type DeleteUserRequest = z.infer<typeof deleteUserSchema>;
