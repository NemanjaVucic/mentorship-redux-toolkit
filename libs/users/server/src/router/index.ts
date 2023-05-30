import { t } from '../lib/trpc';

import { userRouter } from './user';

export const appRouter = t.router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
