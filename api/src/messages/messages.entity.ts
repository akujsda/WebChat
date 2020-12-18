import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { EnhancedBaseEntity } from 'src/entity/base.entity'

@Entity('message')
export class MessageEntity extends EnhancedBaseEntity{
	@PrimaryGeneratedColumn('uuid') id: string

  @Column('varchar', { length: 500, unique: false })
  senderId: string

  @Column('varchar', { length: 500, unique: false })
  text: string

  @Column('varchar', { length: 500, unique: false })
  date: Date

  @Column('varchar', { length: 500, unique: false })
  senderName: string
}
