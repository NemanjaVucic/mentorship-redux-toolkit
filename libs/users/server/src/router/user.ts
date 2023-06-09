import { createUserSchema, deleteUserSchema, updateUserSchema } from '@mentorship/users/shared/schema';

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

  update: t.procedure.input(updateUserSchema).mutation(({ input: { id, data } }) => {
    return prisma.user.update({
      where: { id },
      data,
    });
  }),

  delete: t.procedure.input(deleteUserSchema).mutation(({ input: { id } }) => {
    return prisma.user.delete({
      where: { id },
    });
  }),
});
