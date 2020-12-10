import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  from: string;

  @Column({ type: 'varchar', length: 300 })
  to: string;

  @Column({ type: 'varchar', length: 300 })
  date: string;
}
