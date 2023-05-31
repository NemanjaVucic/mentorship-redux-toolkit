import { createUserSchema } from '@mentorship/users/shared/schema';

import { prisma } from '../lib/prismaClient';
import { t } from '../lib/trpc';

export const userRouter = t.router({
  list: t.procedure.query(() => {
    return prisma.user.findMany();
  }),

  create: t.procedure.input(createUserSchema).mutation(({ input: { avatar, bio, firstName, lastName, email } }) => {
    return prisma.user.create({
      data: {
        avatar,
        bio,
        firstName,
        lastName,
        email,
      },
    });
  }),
});
