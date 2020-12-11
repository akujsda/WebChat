import { EntityRepository, Repository, In } from "typeorm"

import { UserEntity } from "../users/users.entity"
import { CreateMessageDto } from "../dto/create-message.dto"
import { MessageEntity } from "src/messages/messages.entity"

@EntityRepository(UserEntity)
export class MessagesRepository extends Repository<MessageEntity> {

  async sendMessage(input: CreateMessageDto): Promise<MessageEntity> {
    const { recipientId, senderId, text } = input

    const message = new MessageEntity
    message.recipientId = recipientId
    message.senderId = senderId
    message.text = text

    return await message.save()
  }

  async getMessages(): Promise<MessageEntity> {
    return new MessageEntity
  }
}
