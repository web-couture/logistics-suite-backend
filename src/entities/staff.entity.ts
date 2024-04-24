import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { User } from './users.entity';
import { OfficePersonnel } from './office-staff.entity';
import { TripPersonnel } from './vehicle-assistant.entity';

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

  @OneToOne(() => OfficePersonnel, (personnel) => personnel.staffInfo, {
    cascade: true,
    nullable: true,
  })
  officePersonnelInfo: OfficePersonnel | null;

  @OneToOne(() => TripPersonnel, (personel) => personel.staffInfo, {
    cascade: true,
    nullable: true,
  })
  tripPersonnelInfo: TripPersonnel | null;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  get fullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
