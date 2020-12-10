import config = require("config")

export interface DBConfig {
  type: "postgres"
  port: number
  database: string
  host: string
  username: string
  password: string
  synchronize: boolean
  logging: boolean
  migrationsRun: boolean
}

export const databaseConfig = config.get<DBConfig>("db")
