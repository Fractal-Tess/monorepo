import z from 'zod';
import { config } from 'dotenv';

config({ override: true });

export const ENV = Object.freeze(
  z
    .object({
      TRPC_SERVER_URL: z.string().url()
    })
    .parse(process.env)
);
