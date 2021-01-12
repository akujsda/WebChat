import { Module } from '@nestjs/common';

import { ChatResolvers } from './chat.resolvers';
import { ChatService } from './chat.service';
import { ChatRepository } from "../repository/chat.repository"

@Module({
  providers: [ChatResolvers, ChatService, ChatRepository],
})
export class ChatModule {}
