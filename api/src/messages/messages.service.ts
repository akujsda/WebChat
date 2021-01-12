import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

import { Message, User } from '../graphql';
import { CreateMessageDto } from '../dto/create-message.dto';
import { MessagesRepository } from "../repository/message.repository"
import { UserRepository } from "../repository/users.repository"
import { ChatRepository } from 'src/repository/chat.repository';

@Injectable()
export class MessagesService {
  private readonly messagesRepository: MessagesRepository
  private readonly userRepository: UserRepository
  private readonly chatRepository: ChatRepository

  constructor(
    private readonly connection: Connection,
  ){
    this.messagesRepository = this.connection.getCustomRepository(MessagesRepository);
    this.userRepository = this.connection.getCustomRepository(UserRepository);
    this.chatRepository = this.connection.getCustomRepository(ChatRepository);
  }

   async sendMessage(messageDto: CreateMessageDto, user: User){
      const message: Message = new Message();
        message.senderName = (await this.userRepository.findUser(user.email)).name
        message.text = messageDto.text
        message.date= String(new Date())
        message.chatId = messageDto.chatId
      return await this.messagesRepository.sendMessage(message)
    }


    findAll(chatId: string){
        return this.messagesRepository.getMessages(chatId)
    }

    async isMyMessage(chatId: string, userEmail:string){
      const chat= await this.chatRepository.findChatById(chatId)
      const userId =  (await this.userRepository.findUser(userEmail)).id || (await this.userRepository.findById(userEmail)).id

      if(chat.senderId === userId || chat.recipientId === userId){
        return !!chat
      }
    }
}
