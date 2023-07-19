import {
  sqliteTable,
  AnySQLiteColumn,
  integer,
  text
} from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey().notNull(),
  fullName: text('full_name'),
  phone: text('phone')
});
