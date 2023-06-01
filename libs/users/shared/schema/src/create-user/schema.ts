import { z } from 'zod';

export const createUserSchema = z.object({
  firstName: z.string().min(1, 'First Name must be at least 1 characters long!'),
  lastName: z.string().min(1, 'Last Name must be at least 1 characters long!'),
  email: z.string().email(),
  bio: z.string().optional(),
  avatar: z.string().min(1, 'You need to provide a path image!'),
});

export type CreateUserRequest = z.infer<typeof createUserSchema>;
