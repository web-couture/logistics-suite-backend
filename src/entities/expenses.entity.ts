import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Staff } from './staff.entity';

export enum ExpenseStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

@Entity()
export class Expense extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  purpose: string;
  @Column({ nullable: true })
  orderId: string;
  @Column({ type: 'double' })
  value: number;
  @Column({ default: 0 })
  insurance: number;
  @Column({ type: 'double' })
  amount: number;
  @ManyToOne(() => Staff)
  requestedBy: Staff;
  @ManyToOne(() => Staff)
  respondedToBy: Staff;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
