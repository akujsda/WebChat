import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { EnhancedBaseEntity } from 'src/entity/base.entity'

@Entity('user')
export class UserEntity extends EnhancedBaseEntity{
	@PrimaryGeneratedColumn('uuid') id: string

	@Column('varchar', { length: 500, unique: true })
  name: string

  @Column('varchar', { length: 500, unique: true })
  email: string

  @Column('varchar', { length: 500, unique: true })
  password: string
}
