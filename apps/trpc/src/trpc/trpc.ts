import { initTRPC } from '@trpc/server';
import type { appRouter } from './router.ts';

export const trpc = initTRPC.create();

export type AppRouter = typeof appRouter;
