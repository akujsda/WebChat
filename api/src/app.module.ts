import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {UsersModule} from "./users/users.module"
import {TypeOrmModule} from "@nestjs/typeorm"
import {MessageModule} from "./messages/messages.module"
import {UserRepository} from "src/repository/users.repository"
import {MessagesRepository} from "src/repository/message.repository"
import { PubSub } from 'graphql-subscriptions';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    MessageModule,
    UserRepository,
    MessagesRepository,
     ServeStaticModule.forRoot({
       rootPath: join(__dirname, '..', 'client'),
     }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req, connection }) => connection ? { req: connection.context } : { req: req.headers },
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
