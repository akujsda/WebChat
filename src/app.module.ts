import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { VideoModule } from './videos/video.module';
import {UsersModule} from "./users/users.module"

@Module({
  imports: [
    VideoModule,
    UsersModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
})
export class AppModule {}
