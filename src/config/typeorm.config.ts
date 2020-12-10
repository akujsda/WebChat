import { TypeOrmModuleOptions } from "@nestjs/typeorm"

import { getBoolean } from "./get-boolean"
import { databaseConfig } from "./db.config"

export const typeOrmConfig: TypeOrmModuleOptions & {
  seeds: string[]
  factories: string[]
} = {
  type: databaseConfig.type,
  host: process.env.DB_HOST || databaseConfig.host || "localhost",
  port: Number(process.env.DB_PORT) || databaseConfig.port || 5432,
  username: process.env.DB_USERNAME || databaseConfig.username || "tr",
  password: process.env.DB_PASSWORD || databaseConfig.password || "tr",
  database: process.env.DB_NAME || databaseConfig.database || "tr_development",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: getBoolean(process.env.TYPEORM_SYNC, databaseConfig.synchronize),
  logging: databaseConfig.logging,
  migrations: ["dist/migrations/*.js"],
  migrationsRun: getBoolean(
    process.env.MIGRATIONS_RUN,
    databaseConfig.migrationsRun,
  ),
  cli: {
    // eslint-disable-next-line unicorn/prevent-abbreviations
    migrationsDir: "src/migrations",
  },
  seeds: ["dist/seeds/**/*.seed.js"],
  factories: ["dist/seeds/**/*.factory.js"],
}
