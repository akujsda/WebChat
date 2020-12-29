import { EntityRepository, Repository, In } from "typeorm"

import { UserEntity } from "../users/users.entity"
import { CreateChatDto } from "../dto/create-chat.dto"
import { ChatEntity } from "../chats/chat.entity"
import { FindChatInput } from "src/graphql"

@EntityRepository(ChatEntity)
export class ChatRepository extends Repository<ChatEntity> {

  async createChat(input: CreateChatDto): Promise<ChatEntity> {
    const {  senderId, recipientId } = input
    const isChatExist = await this.findOne({where:{senderId: senderId, recipientId: recipientId}})
    const chat = this.create()
    chat.senderId = senderId
    chat.recipientId = recipientId
    chat.id
    await chat.save()
    return await this.findOne({where:{id: chat.id}})
  }

  async findChat(input: FindChatInput): Promise<ChatEntity> {
    const {  senderId, recipientId } = input
    return await this.findOne({where:{senderId:senderId, recipientId:recipientId }})
  }
}
