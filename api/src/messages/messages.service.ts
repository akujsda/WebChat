import { Injectable, Inject } from '@nestjs/common';
import { Message, UserId } from '../graphql';
import { CreateMessageDto } from '../dto/create-message.dto';
import {MessagesRepository} from "../repository/message.repository"
import {UserRepository} from "../repository/users.repository"
import { InjectRepository } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class MessagesService {
  private readonly messagesRepository: MessagesRepository
  private readonly userRepository: UserRepository
  constructor(
    private readonly connection: Connection,
  ){
    this.messagesRepository = this.connection.getCustomRepository(MessagesRepository);
    this.userRepository = this.connection.getCustomRepository(UserRepository);
  }

    sendMessage(messageDto: CreateMessageDto){
      const message: Message = new Message();
      message.text = messageDto.text
      message.senderId = messageDto.senderId
      this.messagesRepository.sendMessage(message)
      return message

    }


    findAll(senderId: string){
      if(this.userRepository.findUser(senderId)){
        return this.messagesRepository.getMessages()
      }else{
        return null
      }
    }


}