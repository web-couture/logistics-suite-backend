import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { OfficePersonnel } from './office-staff.entity';
import { TripPersonnel } from './trip-staff.entity';

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
  @OneToMany(() => OfficePersonnel, (personel) => personel.station)
  officePersonnel: OfficePersonnel[];
  @OneToMany(() => TripPersonnel, (personnel) => personnel.currentStation)
  tripPersonnel: TripPersonnel[];
  station: Station | null;
  phoneNumbers: string[];
  createdAt: Date;
  updatedAt: Date;
}
