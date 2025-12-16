import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  phone: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  date_of_birth: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ type: 'json', nullable: true })
  photos: string[];

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ nullable: true })
  last_active: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
