import superjson from "superjson";
import { initTRPC } from "@trpc/server";

export const t = initTRPC.create({
  transformer: superjson,
});
