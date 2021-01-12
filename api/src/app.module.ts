import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {TypeOrmModule} from "@nestjs/typeorm";
import { PubSub } from 'graphql-subscriptions';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuroraDataApiConnectionOptions } from 'typeorm/driver/aurora-data-api/AuroraDataApiConnectionOptions';

import {UsersModule} from "./users/users.module";
import {MessageModule} from "./messages/messages.module";
import {UserRepository} from "src/repository/users.repository";
import {MessagesRepository} from "src/repository/message.repository";
import {ChatRepository} from "src/repository/chat.repository"
import {ChatModule} from "src/chats/chat.module"

import {ormConfig} from "./config/ormconfig";
import {graphqlConfig} from "./config/graphql-config"
import {serveStaticConfig} from "./config/serve-static-config"
require('dotenv').config();


@Module({
  imports: [
    UsersModule,
    MessageModule,
    UserRepository,
    MessagesRepository,
    ChatModule,
    ChatRepository,
    ServeStaticModule.forRoot(serveStaticConfig),
    GraphQLModule.forRoot(graphqlConfig),
    TypeOrmModule.forRoot(ormConfig as Partial<AuroraDataApiConnectionOptions>),
  ],
  providers: [
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ]
})
export class AppModule {}
