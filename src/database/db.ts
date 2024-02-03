import postgres from 'postgres'
import 'dotenv/config'

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

export const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 8080,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
})