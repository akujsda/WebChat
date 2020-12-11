import { EntityRepository, Repository, In } from "typeorm"

import { UserEntity } from "../users/users.entity"
import { CreateUserDto } from "../dto/create-user.dto"
import { User } from "src/graphql"

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

  async newUserAsync(input: CreateUserDto): Promise<UserEntity> {
    const { name, email, password } = input

    const user = new UserEntity()
    user.name = name
    user.email = email
    user.password = password

    return await user.save()
  }

  async getUsers(): Promise<User[]>{
    const query = this.createQueryBuilder('user').getMany()
    return await query
}
}
