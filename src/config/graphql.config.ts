import config = require("config")
import { GqlModuleOptions } from "@nestjs/graphql"
import depthLimit from "graphql-depth-limit"

import { getBoolean } from "./get-boolean"

type DateScalarMode = "isoDate" | "timestamp"

interface GraphQLConfig {
  debug: boolean
  playground: boolean
  introspection: boolean
  autoSchemaFile: string | boolean
  dateScalarMode: DateScalarMode
  depthLimit: number
}

const configFromFile = config.get<GraphQLConfig>("graphql")

export const graphQLConfig: GqlModuleOptions = {
  validationRules: [
    depthLimit(process.env.GRAPHQL_DEPTH_LIMIT || configFromFile.depthLimit),
  ],
  debug: getBoolean(process.env.GRAPHQL_DEBUG, configFromFile.debug),
  introspection: getBoolean(
    process.env.GRAPHQL_INTROSPECTION,
    configFromFile.introspection,
  ),
  playground: getBoolean(
    process.env.GRAPHQL_PLAYGROUND,
    configFromFile.playground,
  ),
  autoSchemaFile:
    process.env.GRAPHQL_AUTO_SCHEMA_FILE || configFromFile.autoSchemaFile,
  buildSchemaOptions: {
    dateScalarMode:
      (process.env.GRAPHQL_DATE_SCALAR_MODE as DateScalarMode) ||
      configFromFile.dateScalarMode,
  },
  installSubscriptionHandlers: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: ({ req, connection }: any): object => ({ req, connection }), // eslint-disable-line unicorn/prevent-abbreviations
}
