import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User, UserId, UserSignInInput } from '../graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Resolver('User')
export class UsersResolvers {
  constructor(private readonly userService: UsersService) {}

  @Query()
  async users() {
    return this.userService.findAll();
  }

  @Mutation()
  async userSignIn(@Args('input')input: UserSignInInput):Promise<string | undefined> {
    return await this.userService.userSignIn(input)
  }

  @Query()
  async getUserById(@Args('input') find: string): Promise<User> {
    return await this.userService.findOne(find)
  }

  @Mutation('createUser')
  async create(@Args('input') args: CreateUserDto): Promise<User | undefined> {
    return await this.userService.create(args);
  }
}
