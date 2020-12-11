import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { EnhancedBaseEntity } from 'src/entity/base.entity'
import {UserEntity} from "src/users/users.entity"

@Entity('message')
export class MessageEntity extends EnhancedBaseEntity{
	@PrimaryGeneratedColumn('uuid') id: string

  @OneToOne(type => UserEntity, user => user.id)
  @Column('varchar', { length: 500, unique: true })
  senderId: string

  @OneToOne(type => UserEntity, user => user.id)
  @Column('varchar', { length: 500, unique: true })
  recipientId: string

  @Column('varchar', { length: 500, unique: true })
  text: string


}
