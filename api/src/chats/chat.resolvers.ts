import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Message, FindChatInput, Chat, NewChat } from '../graphql';
import { ChatService } from './chat.service';
import { CreateChatDto } from '../dto/create-chat.dto';
import {PubSub} from "graphql-subscriptions"
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/users/auth.guard';



@Resolver('Chat')
export class ChatResolvers {
  // private pubSub: PubSub
  constructor(private readonly chatService: ChatService, ) {
    // this.pubSub = new PubSub()
  }

  @Query('test')
  @UseGuards(new AuthGuard())

  test(){

    return "asd"
  }

  @Mutation('createChat')
  @UseGuards(new AuthGuard())
  async createChat(@Args('input') args: NewChat) {

    return await this.chatService.createChat(args)
  }

  @Query()
  @UseGuards(new AuthGuard())
   findChat(@Args('input') args: FindChatInput) {
    return  this.chatService.findChat(args);
  }

}
