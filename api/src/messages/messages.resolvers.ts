import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Message, UserId } from '../graphql';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from '../dto/create-message.dto';
import {PubSub} from "graphql-subscriptions"
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/users/auth.guard';

const NEW_MESSAGE="NEW_MESSAGE"

@Resolver('Messages')
export class MessagesResolvers {
  private pubSub: PubSub
  constructor(private readonly messagesService: MessagesService, ) {
    this.pubSub = new PubSub()
  }

  @Query()
  @UseGuards(new AuthGuard())
  async getMessages(@Args('input') senderId: string) {
    return await this.messagesService.findAll(senderId);
  }

  @Subscription()
  @UseGuards(new AuthGuard())
  newMessage() {
    return this.pubSub.asyncIterator(NEW_MESSAGE);
  }


  @Mutation('sendMessage')
  @UseGuards(new AuthGuard())
  async create(@Args('input') args: CreateMessageDto): Promise<Message> {
     const createMessage: Message =  this.messagesService.sendMessage(args)
    this.pubSub.publish(NEW_MESSAGE, {newMessage: createMessage})
    return createMessage
  }
}
