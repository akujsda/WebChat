import { NewUser } from '../graphql';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto extends NewUser {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
