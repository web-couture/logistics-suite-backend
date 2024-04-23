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
import { Order } from './order.entity';
import { Charge } from './charges.entity';
export enum PaymentType {
  CASH = 'cash',
  CARD = 'card',
  WALLET = 'wallet',
}
@Entity()
export class OrderPayment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'enum', enum: PaymentType })
  paymentType: PaymentType;
  @OneToOne(() => Order, (order) => order.paymentInfo)
  @JoinColumn()
  order: Order;
  @Column()
  orderId: string;
  @OneToOne(() => Charge, (charge) => charge.orderPayment)
  @JoinColumn()
  chargeInfo: Charge;
  @Column()
  chargeId: string;
  @Column()
  receiptId: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
