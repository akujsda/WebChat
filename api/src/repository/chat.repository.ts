import { EntityRepository, Repository } from "typeorm"

import { CreateChatDto } from "../dto/create-chat.dto"
import { ChatEntity } from "../chats/chat.entity"
import { FindChatInput } from "src/graphql"

@EntityRepository(ChatEntity)
export class ChatRepository extends Repository<ChatEntity> {

  async createChat(input: CreateChatDto): Promise<ChatEntity> {
    const {  senderId, recipientId, senderName, recipientName } = input
    const isChatExist = await this.findOne({where:{senderId: senderId, recipientId: recipientId}}) ||
     await this.findOne({where:{senderId: recipientId, recipientId: senderId}})

    if (!isChatExist && senderId !== recipientId){
      const chat = this.create()
        chat.senderName= senderName
        chat.recipientName= recipientName
        chat.senderId = senderId
        chat.recipientId = recipientId
        chat.id;
        await chat.save()
      return chat
    }
    return isChatExist
  }

  async findChat(input: FindChatInput): Promise<ChatEntity> {
    const {  senderId, recipientId } = input
    return await this.findOne({where:{senderId:senderId, recipientId:recipientId }})
  }

  async getMyChats(id: string): Promise<ChatEntity[]> {
    const iSender =  await this.find({where:{senderId:id}})
    const iRecipient = await this.find({where:{recipientId:id}})

    return  iSender.concat(iRecipient)
  }

  async findChatById(chatId: string): Promise<ChatEntity> {
    return await this.findOne({where:{id : chatId}})
  }
}
