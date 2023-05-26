import { z } from 'zod';

import { prisma } from '../lib/prismaClient';
import { t } from '../lib/trpc';

export const userRouter = t.router({
  list: t.procedure.query(() => {
    return prisma.user.findMany();
  }),
  create: t.procedure
    .input(
      z.object({
        avatar: z.string(),
        bio: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
      }),
    )
    .mutation(({ input: { avatar, bio, firstName, lastName, email } }) => {
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
