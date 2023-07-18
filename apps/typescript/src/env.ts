import z from 'zod';
import dotenv from 'dotenv';

export const ENV = z
  .object({
    BAR: z.string()
  })
  .parse(dotenv.config().parsed);
