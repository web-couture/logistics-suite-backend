import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Staff } from './staff.entity';
import { Station } from './stations.entity';
import { Route } from './routes.entity';

@Entity()
export class Driver extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToOne(() => Staff, { cascade: true })
  @JoinColumn()
  staffInfo: Staff;
  @ManyToOne(() => Station, (station) => station.drivers)
  currentStation: Station;
  @ManyToOne(() => Route, (route) => route.drivers, { nullable: true })
  registeredRoute: Route;
}
