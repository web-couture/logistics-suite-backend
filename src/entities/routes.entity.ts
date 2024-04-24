import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Vehicle } from './vehicles.entity';
import { Driver } from './drivers.entity copy';
import { VehicleAssistant } from './vehicle-assistant.entity';

export enum RouteType {
  LOCAL = 'local',
  INTRASTATE = 'intrastate',
  INTERSTATE = 'interstate',
}
@Entity()
export class Route extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'enum', enum: RouteType })
  coverage: RouteType;
  @Column({ unique: true })
  name: string;
  @Column({ type: 'simple-array' })
  stationIds: string[];
  @OneToMany(() => Vehicle, (vehicle) => vehicle.currentRoute)
  vehicles: Vehicle;
  @OneToMany(() => Driver, (driver) => driver.registeredRoute)
  drivers: Driver[];
  @OneToMany(
    () => VehicleAssistant,
    (vehicleAssistant) => vehicleAssistant.registeredRoute,
  )
  vehicleAssistants: VehicleAssistant[];
}
