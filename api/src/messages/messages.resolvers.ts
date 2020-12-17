import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Message, UserId } from '../graphql';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from '../dto/create-message.dto';
import {PubSub} from "graphql-subscriptions"

const NEW_MESSAGE="NEW_MESSAGE"

@Resolver('Messages')
export class MessagesResolvers {
  private pubSub: PubSub
  constructor(private readonly messagesService: MessagesService, ) {
    this.pubSub = new PubSub()
  }

  @Query()
  async getMessages(@Args('input') senderId: string) {
    return await this.messagesService.findAll(senderId);
  }

  @Subscription()
  newMessage() {
    return this.pubSub.asyncIterator(NEW_MESSAGE);
  }


  @Mutation('sendMessage')
  async create(@Args('input') args: CreateMessageDto): Promise<Message> {
     const createMessage: Message =  this.messagesService.sendMessage(args)
    console.log(createMessage)
    this.pubSub.publish(NEW_MESSAGE, {newMessage: createMessage})
    return createMessage
  }
}
