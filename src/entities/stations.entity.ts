import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { OfficePersonnel } from './office-staff.entity';
import { Order } from './order.entity';
import { Driver } from './drivers.entity copy';
import { VehicleAssistant } from './vehicle-assistant.entity';

@Entity()
export class Station extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  name: string;
  @Column({ unique: true })
  code: string;
  @OneToOne(() => Address, {
    cascade: true,
  })
  @JoinColumn()
  address: Address;
  @Column({ type: 'boolean', default: false })
  isRegional: boolean;
  @OneToMany(() => OfficePersonnel, (personel) => personel.station)
  officePersonnel: OfficePersonnel[];
  @OneToMany(() => Driver, (driver) => driver.currentStation)
  drivers: Driver[];
  @OneToMany(
    () => VehicleAssistant,
    (vehicleAssistant) => vehicleAssistant.currentStation,
  )
  vehicleAssistants: VehicleAssistant[];
  @OneToMany(() => Order, (order) => order.originStation)
  generatedOrders: Order[];
  @OneToMany(() => Order, (order) => order.originStation)
  incomingOrders: Order[];
  @Column({
    type: 'simple-array',
  })
  @Column({ type: 'simple-array' })
  phoneNumbers: string[];
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
