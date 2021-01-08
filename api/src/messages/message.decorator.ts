import { createParamDecorator } from "@nestjs/common"

import { UserEntity } from "../users/users.entity"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GqlResolverFields = [unknown, unknown, { user: any }, unknown] // TODO: improve type definitions

export const CurrentUser = createParamDecorator(
  (_, fields: GqlResolverFields): UserEntity | undefined =>{
   return fields[2].user
}
)
