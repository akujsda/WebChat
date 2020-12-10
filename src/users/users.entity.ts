import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('user')
export class UserEntity {
	@PrimaryGeneratedColumn('uuid') id: string

	@Column('varchar', { length: 500, unique: true })
  name: string

  @Column('varchar', { length: 500, unique: true })
  email: string

  @Column('varchar', { length: 500, unique: true })
  password: string

}
