import { EntityRepository, Repository, In } from "typeorm"

import { UserEntity } from "../users/users.entity"
import { CreateMessageDto } from "../dto/create-message.dto"
import { MessageEntity } from "../messages/messages.entity"
import { Message } from "src/graphql"

@EntityRepository(MessageEntity)
export class MessagesRepository extends Repository<MessageEntity> {

  async sendMessage(input: Message): Promise<MessageEntity> {
    const {  chatId, text, senderName } = input

    const message = this.create()
    message.senderName = senderName
    message.chatId = chatId
    message.text = text
    message.date = new Date()
    message.id
    await message.save()
    return message
  }

  async getMessages(chatId: string): Promise<MessageEntity[]> {

    const messages = await this.find({where:{chatId:chatId}})
    return messages
  }
}
