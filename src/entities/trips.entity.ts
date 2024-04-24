import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Vehicle } from './vehicles.entity';
import { Driver } from './drivers.entity copy';
import { VehicleAssistant } from './vehicle-assistant.entity';
import { Shipment } from './Shipmentment.entity';
import { Route } from './routes.entity';

export enum TripCoverage {
  LOCAL = 'local',
  INTRASTATE = 'intrastate',
  INTERSTATE = 'interstate',
}
@Entity()
export class Trip extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'enum', enum: TripCoverage })
  coverage: TripCoverage;
  @OneToOne(() => Vehicle)
  @JoinColumn()
  vehicle: Vehicle;
  @OneToOne(() => Driver)
  @JoinColumn()
  driver: Driver;
  @OneToOne(() => VehicleAssistant)
  @JoinColumn()
  vehicleAssitant: VehicleAssistant;
  @OneToMany(() => Shipment, (shipment) => shipment.trip)
  shipments: Shipment[];
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToOne(() => Route)
  route: Route;
}
