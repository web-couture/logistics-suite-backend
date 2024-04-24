import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Station } from './stations.entity';
import { Route } from './routes.entity';

export enum VehicleCoverage {
  LOCAL = 'local',
  INTRASTATE = 'intrastate',
  INTERSTATE = 'interstate',
}
export enum VehicleType {
  BICYCLE = 'bicycle',
  SCOOTER = 'scooter',
  MOTORCYCLE = 'motorcycle',
  TRICYCLE = 'tricycle',
  CAR = 'car',
  BUS = 'bus',
  VAN = 'van',
  TRUCK = 'truck',
}

@Entity()
export class Vehicle extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ unique: true })
  registrationNumber: string;
  @Column({ type: 'enum', enum: VehicleType })
  type: VehicleType;
  @Column()
  model: string;
  @Column({ type: 'enum', enum: VehicleCoverage })
  coverage: VehicleCoverage;
  registeredTo: Station;
  currentStation: Station;
  @ManyToOne(() => Route, (route) => route.vehicles, { nullable: true })
  currentRoute: Route | null; //update with route
  currentTrip: string | null; // update with trips
}
