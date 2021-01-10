import { Args, Mutation, Query, Resolver, Subscription, Context } from '@nestjs/graphql';
import { Message, FindChatInput, Chat, NewChat, User, NewChatInput } from '../graphql';
import { ChatService } from './chat.service';
import { CreateChatDto } from '../dto/create-chat.dto';
import {PubSub} from "graphql-subscriptions"
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/users/auth.guard';
import get from 'lodash/get';
import {CurrentUser} from "../messages/message.decorator"

@Resolver('Chat')
export class ChatResolvers {
  // private pubSub: PubSub
  constructor(private readonly chatService: ChatService, ) {
    // this.pubSub = new PubSub()
  }

  @Query('getMyChats')
  @UseGuards(new AuthGuard())
  async getMyChats(
    @CurrentUser() user:User,
  ){
    console.log(user)
    return this.chatService.getMyChats(user.email)
  }

  @Mutation('createChat')
  @UseGuards(new AuthGuard())
  async createChat(
    @CurrentUser() user: User,
    @Args('input') input: NewChatInput
    ) {
    const args: NewChat = {
      senderId : user.id,
      recipientId: input.recipientId
    }
    return await this.chatService.createChat(args)
  }

  @Query()
  @UseGuards(new AuthGuard())
   findChat(
    @CurrentUser() user:User,
    @Args('input') args: FindChatInput
    ) {
      console.log(args, user)
    return  this.chatService.findChat(args);
  }

}
