import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User, UserId } from '../graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Resolver('User')
export class UsersResolvers {
  constructor(private readonly userService: UsersService) {}

  @Query()
  async users() {
    return this.userService.findAll();
  }

  @Query()
  async getUserById(@Args('input') find: UserId): Promise<User> {
    return await this.userService.findOne(find)
  }

  @Mutation('createUser')
  async create(@Args('input') args: CreateUserDto): Promise<User> {
    return await this.userService.create(args);
  }
}
