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

@Entity()
export class TripPersonel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToOne(() => Staff, { cascade: true })
  @JoinColumn()
  staffInfo: Staff;
  @ManyToOne(() => Station, personel => Station.)
  currentStation: 
}
