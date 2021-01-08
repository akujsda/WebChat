import { NewChat } from '../graphql';
import { IsNotEmpty } from 'class-validator';

export class CreateChatDto extends NewChat {
  @IsNotEmpty()
  senderId: string;

  @IsNotEmpty()
  recipientId: string;

  @IsNotEmpty()
  senderName: string;

  @IsNotEmpty()
  recipientName: string;

}
