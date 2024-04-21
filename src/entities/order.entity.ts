import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './customer.entity';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';
import { Station } from './stations.entity';

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
  @ManyToOne(() => Station, (station) => station.generatedOrders)
  originStation: Station;
  @ManyToOne(() => Station, (station) => station.incomingOrders)
  destinationStation: Station;
  @ManyToOne(() => Station, (station) => station.passingOrders)
  intermediateStation: Station;
}
