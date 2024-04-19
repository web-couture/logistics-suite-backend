import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { compare } from 'bcrypt';

export enum UserRole {
  DEVELOPER = 'developer',
  STAFF = 'staff',
  CUSTOMER = 'customer',
}
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    unique: true,
  })
  email: string;
  @Column({
    unique: true,
  })
  username: string;
  @Column()
  password: string;
  @Column({
    nullable: true,
  })
  declare pin: string;
  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role: UserRole;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  async validatePassword(password: string): Promise<boolean> {
    return await compare(password, this.password);
  }
  async validatePin(pin: string): Promise<boolean> {
    return await compare(pin, this.pin);
  }
}
