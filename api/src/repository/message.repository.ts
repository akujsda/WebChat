import { EntityRepository, Repository } from "typeorm"

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
    return await message.save()
  }

  async getMessages(chatId: string): Promise<MessageEntity[]> {
    return await this.find({where:{chatId:chatId}})
  }
}
