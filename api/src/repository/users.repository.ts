import { EntityRepository, Repository, Not } from "typeorm";

import { UserEntity } from "../users/users.entity";
import { User, UserSignInInput, UserPayload } from "src/graphql";
import { NotFoundException } from "@nestjs/common";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

  async newUserAsync(input: User): Promise<boolean> {
    const { name, email, password, salt } = input
    const userExist = await this.findOne({where: {email: email}})
    if (!userExist){

    const user = this.create();
    user.salt = salt;
    user.name = name;
    user.email = email;
    user.password = password;
    user.id;
    user.save();
    return true
    } else {
      return false;
    }
  }

  async userSignIn(input: UserSignInInput): Promise<UserPayload | undefined> {
    const {email, password} = input

    const user = await this.findOne({where: {email: email}})

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


  async getUsers(user): Promise<UserEntity[]> {
    return await this.find({where:{email: Not(user.email)}})
}

  async findUser(find: string): Promise<UserEntity> {
    return await this.findOne({where:{email: find}})
  }

  async findById(find: string): Promise<UserEntity> {
    const user = await this.findOne({where:{id: find}})
    return user
  }

  async findByName(name: string): Promise<UserEntity[]> {
    const user = await this.find({where:{name: name}})
    return user
  }
}
