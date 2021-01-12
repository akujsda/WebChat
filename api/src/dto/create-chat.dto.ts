import { IsNotEmpty } from 'class-validator';

import { NewChat } from '../graphql';

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
