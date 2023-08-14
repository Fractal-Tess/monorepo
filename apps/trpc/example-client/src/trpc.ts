import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../src/trpc/trpc.js';
import { ENV } from './env.js';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: ENV.TRPC_SERVER_URL
    })
  ]
});
