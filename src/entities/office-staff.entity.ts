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
export class OfficePersonel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToOne(() => Staff, { cascade: true })
  @JoinColumn()
  staffInfo: Staff;
  @ManyToOne(() => Station, (station) => station.officePersonel, {
    eager: true,
    nullable: true,
  })
  station: Station | null;
}
