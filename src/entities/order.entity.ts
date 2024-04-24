import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from './customer.entity';
import { Station } from './stations.entity';
import { Charge } from './charges.entity';
import { OfficePersonnel } from './office-staff.entity';
import { OrderPayment } from './order-payments.entity';
import { Shipment } from './Shipmentment.entity';

export enum OrderCoverage {
  LOCAL = 'local',
  INTERSTATION = 'interstation',
}
export enum DeliveryType {
  REGULAR = 'regular',
  EXPRESS = 'express',
}

export enum DeliveryCategory {
  PICKUP_TO_DOOR = 'Pickup to door',
  PICKUP_TO_STATION = 'Pickup to station',
  STATION_TO_STATION = 'Station to station',
  STATION_TO_DOOR = 'Station to door',
}
@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unsigned: true })
  trackingNumber: string;
  @Column()
  customerId: string;
  @ManyToOne(() => Customer, (customer) => customer.orders)
  sender: Customer;
  @Column()
  originStationId: string;
  @Column({ type: 'enum', enum: OrderCoverage })
  coverage: OrderCoverage;
  @Column({ type: 'enum', enum: DeliveryType })
  deliveryType: DeliveryType;
  @Column({ type: 'enum', enum: DeliveryCategory })
  deliveryCategory: DeliveryCategory;
  @ManyToOne(() => Station, (station) => station.generatedOrders)
  originStation: Station;
  @ManyToOne(() => Station, (station) => station.incomingOrders, {
    nullable: true,
  })
  destinationStation: Station;
  @Column({ nullable: true })
  destinationStationId: string;
  @Column({ type: 'simple-json' })
  item: {
    quantity: number;
    weight: number;
    type: string;
    category: string;
    description: string;
  };
  @OneToOne(() => Charge)
  charge: Charge;
  @OneToOne(() => OrderPayment, (orderPayment) => orderPayment.order, {
    nullable: true,
  })
  paymentInfo: OrderPayment | null;

  @ManyToOne(() => OfficePersonnel, (personnel) => personnel.orders)
  processedBy: OfficePersonnel;
  @ManyToOne(() => Shipment, (shipment) => shipment.orders, { nullable: true })
  shipment: Shipment | null;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
