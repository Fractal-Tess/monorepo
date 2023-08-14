import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';

import { appRouter } from './router.ts';
import { ENV } from '../env.ts';

export const startTRPC = () => {
  console.log('Starting tRPC server...');
  const { port } = createHTTPServer({
    middleware: cors({
      credentials: true,
      origin: (requestOrigin, callback) => callback(null, requestOrigin)
    }),
    router: appRouter
  }).listen(ENV.PORT);
  console.log(`Started tRPC server on port ${port}`);
};
