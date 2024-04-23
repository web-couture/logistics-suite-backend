import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { OrderPayment } from './order-payments.entity';

@Entity()
export class Charge extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;
  @Column({ type: 'simple-json' })
  additionalCharges: {
    [key: string]: string;
  };
  @Column()
  vat: number;
  @Column({ default: 0 })
  insurance: number;
  @Column()
  freightCharge: number;
  @Column({ type: 'boolean', default: false })
  isPaid: boolean;
  @Column({ nullable: true })
  orderPaymentId: string;
  @Column({ type: 'boolean', default: false })
  payOnDelivery: boolean;
  @OneToOne(() => OrderPayment, (orderPayment) => orderPayment.chargeInfo, {
    nullable: true,
  })
  @JoinColumn()
  orderPayment: OrderPayment;
}
