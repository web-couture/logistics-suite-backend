import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Staff } from './staff.entity';
import { Station } from './stations.entity';
import { Order } from './order.entity';

@Entity()
export class OfficePersonnel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToOne(() => Staff, { cascade: true })
  @JoinColumn()
  staffInfo: Staff;
  @ManyToOne(() => Station, (station) => station.officePersonnel, {
    eager: true,
    nullable: true,
  })
  station: Station | null;
  @Column()
  stationId: string;
  @OneToMany(() => Order, (order) => order.processedBy)
  orders: Order[];
}
