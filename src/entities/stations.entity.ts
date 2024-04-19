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
import { Staff } from './staff.entity';
import { OfficePersonel } from './office-staff.entity';

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
  @OneToMany(() => OfficePersonel, (personel) => personel.station)
  officePersonel: OfficePersonel[];
  @ManyToOne(() => Station, (station) => station.staff, {
    eager: true,
    nullable: true,
  })
  station: Station | null;
  phoneNumbers: string[];
  createdAt: Date;
  updatedAt: Date;
}
