import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Message, UserId } from '../graphql';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from '../dto/create-message.dto';
import {PubSub} from "graphql-subscriptions"
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/users/auth.guard';
import { MessageEntity } from './messages.entity';

const NEW_MESSAGE="NEW_MESSAGE"

@Resolver('Messages')
export class MessagesResolvers {
  private pubSub: PubSub
  constructor(private readonly messagesService: MessagesService, ) {
    this.pubSub = new PubSub()
  }

  @Query()
  @UseGuards(new AuthGuard())
  async getMessages(@Args('chatId') chatId: string) {
    return await this.messagesService.findAll(chatId);
  }

  @Subscription()
  @UseGuards(new AuthGuard())
  newMessage(@Args('chatId') chatId: string) {
    return this.pubSub.asyncIterator(NEW_MESSAGE);
  }


  @Mutation('sendMessage')
  @UseGuards(new AuthGuard())
  async create(@Args('input') args: CreateMessageDto): Promise<MessageEntity> {
    //  const createMessage: Message =  this.messagesService.sendMessage(args)
     return  await this.messagesService.sendMessage(args)
    // this.pubSub.publish(NEW_MESSAGE, {newMessage: createMessage})
    // return createMessage
  }
}
