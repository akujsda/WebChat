import { Module } from '@nestjs/common';

import { MessagesResolvers } from './messages.resolvers';
import { MessagesService } from './messages.service';
import { MessagesRepository } from "../repository/message.repository"

@Module({
  providers: [MessagesResolvers, MessagesService, MessagesRepository],
})
export class MessageModule {}
