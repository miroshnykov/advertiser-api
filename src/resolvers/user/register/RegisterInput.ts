import { Field, InputType } from 'type-graphql';
import { IsEmail, Length } from 'class-validator';
import { Match } from '../../../utils/custom-validations/match';

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @Length(8)
  password!: string;

  @Field()
  @Length(10)
  name!: string;

  @Field()
  @Length(8)
  @Match('password', { message: 'Passwords don\'t match' })
  repeatPassword!: string;
}
