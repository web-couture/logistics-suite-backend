import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './users.entity';
import { Customer } from './customer.entity';

@Entity()
export class CorporateCustomer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToOne(() => User)
  @JoinColumn()
  userInfo: User;
  @OneToOne(() => Customer)
  @JoinColumn()
  customerInfo: Customer;
  @Column({ type: 'double' })
  walletBalance: number;
  @Column()
  businessName: string;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
