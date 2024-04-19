import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Station } from './stations.entity';
import { Address } from './address.entity';
import { User } from './users.entity';
import { OfficePersonel } from './office-staff.entity';
import { TripPersonel } from './trip-staff.entity';

export enum StaffRole {
  DIRECTOR = 'director',
  HR = 'hr',
  MANAGER = 'manager',
  STATION_OFFICER = 'station officer',
  VEHICLE_ASSISTANT = 'vehicle assistant',
  DRIVER = 'DRIVER',
}

@Entity()
export class Staff extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  phoneNumber: string;

  @OneToOne(() => Address, {
    cascade: true,
  })
  @JoinColumn()
  address: Address;
  @Column({ nullable: true })
  stationId: string;
  @Column({
    type: 'enum',
    enum: StaffRole,
  })
  role: StaffRole;

  @OneToOne(() => OfficePersonel, (personel) => personel.staffInfo, {
    cascade: true,
    nullable: true,
  })
  officePersonelInfo: OfficePersonel | null;

  @OneToOne(() => TripPersonel, (personel) => personel.staffInfo, {
    cascade: true,
    nullable: true,
  })
  tripPersonelInfo: TripPersonel | null;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  get fullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
