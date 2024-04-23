import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OfficePersonnel } from './office-staff.entity';

export enum ReceiptType {
  ORDER_PAYMENT = 'order payment',
  WALLET_REFILL = 'wallet refill',
}

@Entity()
export class Receipt extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    type: 'enum',
    enum: ReceiptType,
  })
  receiptType: ReceiptType;
  @Column()
  customerId: string;
  @Column({ nullable: true })
  orderId: string;
  @Column({ default: 0 })
  vat: number;
  @Column({ default: 0 })
  insurance: number;
  @Column({ type: 'double' })
  amount: number;
  @ManyToOne(() => OfficePersonnel)
  processedBy: OfficePersonnel;
  @CreateDateColumn()
  createdAt: Date;
  get statutory() {
    return this.vat + this.insurance;
  }
  get netPay() {
    return this.amount - (this.vat + this.insurance);
  }
}
