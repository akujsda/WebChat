import { Injectable, NotFoundException } from '@nestjs/common';
import { Message, UserId, FindChatInput, NewChat } from '../graphql';
import { CreateChatDto } from '../dto/create-chat.dto';
import {MessagesRepository} from "../repository/message.repository"
import {UserRepository} from "../repository/users.repository"
import {ChatRepository} from "../repository/chat.repository"
import { Connection } from 'typeorm';
import * as jwt from 'jsonwebtoken'
import get from 'lodash/get';

@Injectable()
export class ChatService {
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

  async createChat(input: NewChat){
    const {senderId, recipientId} = input
    const isSenderExist = await this.userRepository.findById(senderId)
    const isRecipientExist = await this.userRepository.findById(recipientId)
    const isChatExist = await this.chatRepository.findChat(input)

    if (!!isSenderExist && !!isRecipientExist && !isChatExist){
      const chatWithNames = Object.assign(input)
      chatWithNames.senderName = isSenderExist.name
      chatWithNames.recipientName = isRecipientExist.name
      this.chatRepository.createChat(chatWithNames)
      return true
    } else {
      return false
    }

  }

  async findChat(input: FindChatInput){
    const chat = await this.chatRepository.findChat(input)
    if (chat){
      return chat
    } else {
      throw new NotFoundException("chat is not exist")
    }
  }

  async getMyChats(email: string){
    const user = await this.userRepository.findUser(email)
    return this.chatRepository.getMyChats(user.id)
  }
}
