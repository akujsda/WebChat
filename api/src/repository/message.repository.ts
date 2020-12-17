import { EntityRepository, Repository, In } from "typeorm"

import { UserEntity } from "../users/users.entity"
import { CreateMessageDto } from "../dto/create-message.dto"
import { MessageEntity } from "../messages/messages.entity"

@EntityRepository(MessageEntity)
export class MessagesRepository extends Repository<MessageEntity> {

  async sendMessage(input: CreateMessageDto): Promise<MessageEntity> {
    const {  senderId, text, senderName } = input

    const message = new MessageEntity
    message.senderId = senderId
    message.text = text
    message.senderName =  senderName
    message.date = new Date()

    return await message.save()
  }

  async getMessages(): Promise<MessageEntity[]> {
    return await this.find()
  }
}
