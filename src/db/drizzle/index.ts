import { drizzle } from 'drizzle-orm/better-sqlite3';
import { postsTable } from './schemas';
import Database from 'better-sqlite3';
import { resolve } from 'path';

const sqliteDatabsePath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDatabse = new Database(sqliteDatabsePath);

export const drizzleDb = drizzle(sqliteDatabse, {
  schema: {
    posts: postsTable,
  },
  logger: false,
});
