import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address.entity';

@Entity()
export class customer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column({
    unique: true,
  })
  phoneNumber: string;
  @Column({ nullable: true })
  email: string | null;
  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;
}
