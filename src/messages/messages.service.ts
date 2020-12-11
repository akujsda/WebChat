import { Injectable, Inject } from '@nestjs/common';
import { Message, UserId } from '../graphql';
import { CreateMessageDto } from '../dto/create-message.dto';
import {MessagesRepository} from "../repository/message.repository"
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessagesService {

  constructor(
    @InjectRepository(MessagesRepository)
    private readonly messagesRepository: MessagesRepository,
  ){}

    sendMessage(messageDto: CreateMessageDto){
      const message: Message = new Message();
      message.recipientId = messageDto.recipientId
      message.text = messageDto.text
      message.senderId = messageDto.senderId
      this.messagesRepository.sendMessage(message)
      return message
    }

    findAll(sender: string){
      return this.messagesRepository
    }


}
