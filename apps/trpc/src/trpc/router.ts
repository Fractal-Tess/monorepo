import { trpc } from './trpc.ts';
import { router as echo } from './echo/router.ts';

export const appRouter = trpc.router({
  echo
});
