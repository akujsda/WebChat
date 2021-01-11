import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { User, UserSignInInput,  SignInPayload } from '../graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from "./auth.guard";
import {CurrentUser} from "../messages/message.decorator"
@Resolver('User')
export class UsersResolvers {
  constructor(private readonly userService: UsersService) {}

  @Query()
  @UseGuards(new AuthGuard())
  users(
    @CurrentUser() user:User
  ) {
    return this.userService.findAll(user);
  }

  @Query()
  @UseGuards(new AuthGuard())
  me(@Context('user') user: User) {
    return this.userService.findOne(user.email);
  }

  @Mutation()
  async userSignIn(@Args('input')input: UserSignInInput):Promise<SignInPayload> {
    return await this.userService.createToken(input);
  }

  @Query()
  async getUserById(@Args('input') find: string): Promise<User> {
    return await this.userService.findOne(find);
  }

  @Mutation('createUser')
  async create(@Args('input') args: CreateUserDto): Promise<boolean> {
    return await this.userService.create(args);
  }
}
