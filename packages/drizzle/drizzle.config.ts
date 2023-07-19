import type { Config } from 'drizzle-kit';
// In case db !== sqlite
import * as dotenv from 'dotenv';
dotenv.config();

console.log(process.env.DB_URL);
export default {
  schema: './schema/main.ts',
  out: './drizzle',
  driver: 'better-sqlite',
  dbCredentials: {
    url: process.env.DB_URL as string
  }
} satisfies Config;
