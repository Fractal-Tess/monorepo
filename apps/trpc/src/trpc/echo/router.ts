import { publicProcedure } from '../procedures/public.ts';
import { trpc } from '../trpc.ts';
import { z } from 'zod';
const inputSchema = z.object({
  inputMessage: z.string()
});

export const router = trpc.router({
  echoMessage: publicProcedure
    .input(inputSchema)
    .query(({ input: { inputMessage } }) => {
      return `Hello from TRPC echo handler - ${inputMessage}`;
    })
});
