import { EntityRepository, Repository, In } from "typeorm"

import { UserEntity } from "../users/users.entity"
import { CreateMessageDto } from "../dto/create-message.dto"
import { MessageEntity } from "../messages/messages.entity"

@EntityRepository(MessageEntity)
export class MessagesRepository extends Repository<MessageEntity> {

  async sendMessage(input: CreateMessageDto): Promise<MessageEntity> {
    const { recipientId, senderId, text } = input

    const message = new MessageEntity
    message.recipientId = recipientId
    message.senderId = senderId
    message.text = text

    return await message.save()
  }

  async getMessages(senderId: String): Promise<MessageEntity[]> {
    return await this.find({where:{senderId: `${senderId}`}})
  }
}
