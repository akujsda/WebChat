import { Injectable, Inject } from '@nestjs/common';
import { User, UserId, UserSignInInput } from '../graphql';
import { CreateUserDto } from '../dto/create-user.dto';
import {UserRepository} from "../repository/users.repository"
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { Connection } from 'typeorm';
@Injectable()
export class UsersService {
  private userRepository: UserRepository
  constructor(

    private readonly connection: Connection,
  ){
    this.userRepository = this.connection.getCustomRepository(UserRepository);
  }

  private readonly users: User[] = [];

 async create(userDto: CreateUserDto): Promise<User | undefined> {
    const listSize: number  = this.users.length + 1;
    const user: User = new User();
    user.id = listSize.toString();
    user.name = userDto.name;
    user.email = userDto.email;
    user.password = userDto.password
    this.users.push(user);
    return await this.userRepository.newUserAsync(user)
  }

 async userSignIn(input: UserSignInInput): Promise<string | undefined> {
  return await this.userRepository.userSignIn(input)
 }

 async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.getUsers()
  }

 async findOne(find: string): Promise<User> {
    return await this.userRepository.findUser(find)
  }
}
