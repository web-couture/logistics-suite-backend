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
export class VehicleAssistant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToOne(() => Staff, { cascade: true })
  @JoinColumn()
  staffInfo: Staff;
  @ManyToOne(() => Station, (station) => station.vehicleAssistants)
  currentStation: Station;
  @ManyToOne(() => Route, (route) => route.vehicleAssistants, {
    nullable: true,
  })
  registeredRoute: Route;
}
