import { Injectable } from '@nestjs/common';
import { User, UserId } from '../graphql';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(userDto: CreateUserDto): User {
    const listSize: number  = this.users.length + 1;
    const user: User = new User();
    user.id = listSize.toString();
    user.name = userDto.name;
    user.email = userDto.email;
    user.password = userDto.password
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(find: UserId): User {
    return this.users.find((user)=> user.id === find.id)
  }
}
