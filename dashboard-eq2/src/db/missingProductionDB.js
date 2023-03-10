import { Pool } from "pg"

let missingProductionDB

if (!missingProductionDB) {
missingProductionDB = new Pool({
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB_NAME_M,
  })
}

export default missingProductionDB
