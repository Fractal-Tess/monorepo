import z from 'zod';
import { publicProcedure } from '../procedures/public.ts';

const inputSchema = z.object({
  inputMessage: z.string()
});

export const echoHandler = publicProcedure
  .input(inputSchema)
  .query(({ input: { inputMessage } }) => {
    return `Hello from TRPC echo handler - ${inputMessage}`;
  });
