import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Station } from './stations';

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
  @Column()
  userId: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  phoneNumber: string;
  @Column()
  fullName: string;
  @Column({ nullable: true })
  stationId: string;
  @ManyToOne(() => Station, (station) => station.staff, {
    eager: true,
    nullable: true,
  })
  station: Station | null;
  @Column({
    type: 'enum',
    enum: StaffRole,
  })
  role: StaffRole;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
