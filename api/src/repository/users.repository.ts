import { EntityRepository, Repository } from "typeorm"

import { UserEntity } from "../users/users.entity"
import { CreateUserDto } from "../dto/create-user.dto"
import { User, UserId, UserSignInInput } from "src/graphql"

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

  async newUserAsync(input: CreateUserDto): Promise<UserEntity | undefined> {
    const { name, email, password } = input
    const userExist = await this.findOne({where: {email: email, password: password}})
    if (!userExist){
    const user = this.create()
    user.name = name
    user.email = email
    user.password = password
    user.id
    user.save()
    return await this.findOne({where: {email: email, password: password}})
    } else {
      return undefined
    }
  }

  async userSignIn(input: UserSignInInput): Promise<string | undefined> {
    const {email, password} = input
    const user = await this.findOne({where: {email: email, password: password}})
    return user ? user.id : undefined
  }


  async getUsers(): Promise<UserEntity[]> {
    return await this.find()
}

  async findUser(find: string): Promise<UserEntity> {
    const user = await this.findOne({where:{id: find}})
    return user
  }
}
