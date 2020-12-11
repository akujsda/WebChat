import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Message, UserId } from '../graphql';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from '../dto/create-message.dto';

@Resolver('Messages')
export class MessagesResolvers {
  constructor(private readonly messagesService: MessagesService) {}

  // @Query()
  // async getMessages(@Args('senderId') sender: string) {
  //   return this.messagesService.findAll(sender);
  // }

  @Mutation('sendMessage')
  async create(@Args('input') args: CreateMessageDto): Promise<Message> {
    return await this.messagesService.sendMessage(args);
  }
}
