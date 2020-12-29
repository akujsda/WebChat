import { EntityRepository, Repository, In } from "typeorm"

import { UserEntity } from "../users/users.entity"
import { CreateMessageDto } from "../dto/create-message.dto"
import { MessageEntity } from "../messages/messages.entity"

@EntityRepository(MessageEntity)
export class MessagesRepository extends Repository<MessageEntity> {

  async sendMessage(input: CreateMessageDto): Promise<MessageEntity> {
    const {  chatId, text } = input

    const message = new MessageEntity
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
