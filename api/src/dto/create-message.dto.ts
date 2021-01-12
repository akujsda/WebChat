import { IsNotEmpty } from 'class-validator';

import { NewMessage } from '../graphql';

export class CreateMessageDto extends NewMessage {
  @IsNotEmpty()
  chatId: string;

  @IsNotEmpty()
  text: string;
}
