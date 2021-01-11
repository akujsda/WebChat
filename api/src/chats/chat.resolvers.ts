import { Args, Mutation, Query, Resolver, Subscription, Context } from '@nestjs/graphql';
import { Message, FindChatInput, Chat, NewChat, User, NewChatInput } from '../graphql';
import { ChatService } from './chat.service';
import { CreateChatDto } from '../dto/create-chat.dto';
import {PubSub} from "graphql-subscriptions"
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/users/auth.guard';
import get from 'lodash/get';
import {CurrentUser} from "../messages/message.decorator"


const NEW_CHAT="NEW_CHAT"
@Resolver('Chat')
export class ChatResolvers {
  private pubSub: PubSub
  constructor(private readonly chatService: ChatService) {
    this.pubSub = new PubSub()
  }

  @Query('getMyChats')
  @UseGuards(new AuthGuard())
  async getMyChats(
    @CurrentUser() user:User,
  ){
    return this.chatService.getMyChats(user.email)
  }

  @Subscription()
  @UseGuards(new AuthGuard())
  newChat() {
    return this.pubSub.asyncIterator(NEW_CHAT);
  }

  @Mutation('createChat')
  @UseGuards(new AuthGuard())
  async createChat(
    @CurrentUser() user: User,
    @Args('input') input: NewChatInput
    ) {
    const args: NewChat = {
      senderId : user.email,
      recipientId: input.recipientId
    }
    const createdChat=await this.chatService.createChat(args)
    const shouldUseSubscribe = await this.chatService.isMyChat(createdChat.id, args)

    if(shouldUseSubscribe){
      this.pubSub.publish(NEW_CHAT, {newChat: createdChat})
    }

    return createdChat
  }

  @Query()
  @UseGuards(new AuthGuard())
   findChat(
    @CurrentUser() user:User,
    @Args('input') args: FindChatInput
    ) {
    return  this.chatService.findChat(args);
  }

}
