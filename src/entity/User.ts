import { ObjectType, Field, ID } from 'type-graphql';
import {
  BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';


@ObjectType({ description: 'The User model' })
@Entity('sfl_advertisers')
export class User extends BaseEntity{
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;
}

