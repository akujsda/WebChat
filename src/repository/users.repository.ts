import { EntityRepository, Repository } from "typeorm"

import { UserEntity } from "../users/users.entity"
import { CreateUserDto } from "../dto/create-user.dto"
import { User, UserId } from "src/graphql"

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

  async newUserAsync(input: CreateUserDto): Promise<UserEntity> {
    const { name, email, password } = input

    const user = new UserEntity()
    user.name = name
    user.email = email
    user.password = password
    user.save()
    return await this.findOne({where:{id: user.id, name: user.name, email: user.email, password: user.password}})
  }


  async getUsers(): Promise<UserEntity[]> {
    return await this.find()
}

  async findUser(find: UserId): Promise<UserEntity> {
    return await this.findOne({where:{id: find.id}})
  }
}
