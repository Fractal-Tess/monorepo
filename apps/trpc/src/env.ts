import z, { object } from 'zod';
import { config } from 'dotenv';

config({ override: true });

export const ENV = Object.freeze(
  z
    .object({
      PORT: z.string().transform(Number)
    })
    .parse(process.env)
);
