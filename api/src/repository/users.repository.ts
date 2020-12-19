import { EntityRepository, Repository } from "typeorm"

import { UserEntity } from "../users/users.entity"
import { CreateUserDto } from "../dto/create-user.dto"
import { User, UserId, UserSignInInput, UserPayload } from "src/graphql"
import { NotFoundException } from "@nestjs/common"

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

  async newUserAsync(input: User): Promise<UserEntity | undefined> {
    const { name, email, password, salt } = input
    const userExist = await this.findOne({where: {email: email, password: password}})
    if (!userExist){

    const user = this.create()
    user.salt = salt
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

  async userSignIn(input: UserSignInInput): Promise<UserPayload | undefined> {
    const {email, password} = input

    const user = await this.findOne({where: {email: email}})
    console.log(await user.validatePasswordAsync(password));

   if (!await user.validatePasswordAsync(password)){
    throw new NotFoundException("password or email was incorrect")
   }
   if (!user){
    throw new NotFoundException("user not found")
   }
    const userPayload = {
      id: user.id,
      userName: user.name
    }
    return userPayload
  }


  async getUsers(): Promise<UserEntity[]> {
    return await this.find()
}

  async findUser(find: string): Promise<UserEntity> {
    const user = await this.findOne({where:{email: find}})
    return user
  }

  async findByName(name: string): Promise<UserEntity> {
    const user = await this.findOne({where:{name: name}})

    if(!await this.findOne({where:{name: name}})){
      throw new NotFoundException("user is not exist")
    }

    return user

  }
}
