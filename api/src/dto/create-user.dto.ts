import { IsNotEmpty } from 'class-validator';

import { NewUser } from '../graphql';

export class CreateUserDto extends NewUser {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
