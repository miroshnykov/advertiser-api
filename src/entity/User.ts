import { ObjectType, Field, ID } from 'type-graphql';
import {
  BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';

import { UserStatus } from '../constants/UserStatus';

@ObjectType({ description: 'The User model' })
@Entity('sfl_advertisers')
export class User extends BaseEntity{
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column({
    type: 'varchar', unique: true, nullable: true, length: 50,
  })
  email!: string;

  // database column
  @Column()
  password!: string;

  @Column('int', { default: 0 })
  token_version!: number;

  @Column('datetime', { nullable: true, default: null })
  verified!: Date | null;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.INACTIVE })
  status!: UserStatus;

  @Column('int', { unsigned: true, width: 10, nullable: true })
  advertiser_manager_id!: number;

  @Column('int', { unsigned: true, width: 10, nullable: true })
  origin_id!: number;

  @Column('varchar', { length: 100, default: '' })
  website!: string;

  @Column('varchar', { length: 100, default: '' })
  tags!: string;

  @Column('varchar', { length: 256, default: '' })
  descriptions!: string;

  @Column('varchar', { length: 100, default: '' })
  description!: string;

  @Column('int', { width: 11 })
  date_added!: number;

  @Column('timestamp', { onUpdate: 'CURRENT_TIMESTAMP()' })
  date_updated!: string;

}

