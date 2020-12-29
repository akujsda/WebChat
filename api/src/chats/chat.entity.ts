import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { EnhancedBaseEntity } from 'src/entity/base.entity'

@Entity('chat')
export class ChatEntity extends EnhancedBaseEntity{
	@PrimaryGeneratedColumn('uuid') id: string

  @Column('varchar', { length: 500, unique: false })
  senderId: string

  @Column('varchar', { length: 500, unique: false })
  recipientId: string
}
