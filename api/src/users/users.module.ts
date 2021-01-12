import { Module } from '@nestjs/common';
import { UsersResolvers } from './users.resolvers';
import { UsersService } from './users.service';
import { UserRepository } from "../repository/users.repository"

@Module({
  providers: [UsersService, UsersResolvers, UserRepository],
})
export class UsersModule {}
