import { Injectable, Inject } from '@nestjs/common';
import { User, UserId, UserSignInInput, UserPayload } from '../graphql';
import { CreateUserDto } from '../dto/create-user.dto';
import {UserRepository} from "../repository/users.repository"
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { Connection } from 'typeorm';
import * as bcrypt from "bcryptjs"

@Injectable()
export class UsersService {
  private userRepository: UserRepository
  constructor(

    private readonly connection: Connection,
  ){
    this.userRepository = this.connection.getCustomRepository(UserRepository);
  }

  private readonly users: User[] = [];

  async hashPasswordAsync(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt)
  }

 async create(userDto: CreateUserDto): Promise<User | undefined> {
    const salt = await bcrypt.genSalt(10)

    const listSize: number  = this.users.length + 1;
    const user: User = new User();
    user.salt = await salt
    user.id = listSize.toString();
    user.name = userDto.name;
    user.email = userDto.email;
    user.password = await this.hashPasswordAsync(userDto.password, user.salt)
    this.users.push(user);
    return await this.userRepository.newUserAsync(user)
  }

 async userSignIn(input: UserSignInInput): Promise<UserPayload | undefined> {
  return await this.userRepository.userSignIn(input)
 }

 async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.getUsers()
  }

 async findOne(find: string): Promise<User> {
    return await this.userRepository.findUser(find)
  }

  async findByName(name: string): Promise<User> {
    return await this.userRepository.findByName(name)
  }
}
