import { userRouter } from "./user";
import { t } from "../lib/trpc";

export const appRouter = t.router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
