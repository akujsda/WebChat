import { NewMessage } from '../graphql';
import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto extends NewMessage {
  @IsNotEmpty()
  chatId: string;

  @IsNotEmpty()
  text: string;
}
