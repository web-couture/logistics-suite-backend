import {
  BaseEntity,
  Column,
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
export class WalletPayment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  corporatecustomerId: string;
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
  get statutory() {
    return this.vat + this.insurance;
  }
  get netPay() {
    return this.amount - (this.vat + this.insurance);
  }
}
