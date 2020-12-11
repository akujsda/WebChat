import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { VideoModule } from './videos/video.module';
import {UsersModule} from "./users/users.module"
import {TypeOrmModule} from "@nestjs/typeorm"
import {MessageModule} from "./messages/messages.module"
@Module({
  imports: [
    VideoModule,
    UsersModule,
    MessageModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "tr",
      "password": "tr",
      "database": "webchat",
      "entities": [
        "dist/**/*.entity.js"
      ],
      "synchronize": true,
      "logging": true
    }),
  ],
})
export class AppModule {}
