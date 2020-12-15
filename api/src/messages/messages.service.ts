import { Injectable, Inject } from '@nestjs/common';
import { Message, UserId } from '../graphql';
import { CreateMessageDto } from '../dto/create-message.dto';
import {MessagesRepository} from "../repository/message.repository"
import { InjectRepository } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class MessagesService {
  private readonly messagesRepository: MessagesRepository
  constructor(
    private readonly connection: Connection,
  ){
    this.messagesRepository = this.connection.getCustomRepository(MessagesRepository);
  }

    sendMessage(messageDto: CreateMessageDto){
      const message: Message = new Message();
      message.recipientId = messageDto.recipientId
      message.text = messageDto.text
      message.senderId = messageDto.senderId
      this.messagesRepository.sendMessage(message)
      return message
    }


    findAll(senderId: string){
      return this.messagesRepository.getMessages(senderId)
    }


}
