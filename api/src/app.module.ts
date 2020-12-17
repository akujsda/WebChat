import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {UsersModule} from "./users/users.module"
import {TypeOrmModule} from "@nestjs/typeorm"
import {MessageModule} from "./messages/messages.module"
import {UserRepository} from "src/repository/users.repository"
import {MessagesRepository} from "src/repository/message.repository"
import { PubSub } from 'graphql-subscriptions';

@Module({
  imports: [
    UsersModule,
    MessageModule,
    UserRepository,
    MessagesRepository,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      subscriptions: {
        keepAlive: 5000,
      }
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
  providers: [
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ]
})
export class AppModule {}
