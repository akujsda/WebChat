import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { EnhancedBaseEntity } from '../entity/base.entity'
import { BadRequestException } from '@nestjs/common'
import * as bcrypt from "bcryptjs"

@Entity('user')
export class UserEntity extends EnhancedBaseEntity{
	@PrimaryGeneratedColumn('uuid') id: string

	@Column('varchar', { length: 500, unique: true })
  name: string

  @Column('varchar', { length: 500, unique: true })
  email: string

  @Column('varchar', { length: 500, unique: false })
  password: string

  @Column({ nullable: true })
  salt: string

  token: string

  async validatePasswordAsync(password: string): Promise<boolean> {
    if (!this.salt || !this.password) {
      throw new BadRequestException("incorrect password")
    }

    const hash = await bcrypt.hash(password, this.salt)
    return hash === this.password
  }

}
