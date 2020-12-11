import { Injectable, Inject } from '@nestjs/common';
import { User, UserId } from '../graphql';
import { CreateUserDto } from '../dto/create-user.dto';
import {UserRepository} from "../repository/users.repository"
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ){}

  private readonly users: User[] = [];

  create(userDto: CreateUserDto): User {
    const listSize: number  = this.users.length + 1;
    const user: User = new User();
    user.id = listSize.toString();
    user.name = userDto.name;
    user.email = userDto.email;
    user.password = userDto.password
    this.users.push(user);
    this.userRepository.newUserAsync(user)
    return user;
  }

  findAll(): User[] {

    console.log( this.userRepository.getUsers())
    return this.users
  }

  findOne(find: UserId): User {
    return this.users.find((user)=> user.id === find.id)
  }
}
