import { NewMessage } from '../graphql';
import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto extends NewMessage {
  @IsNotEmpty()
  senderId: string;

  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  senderName: string;
}
