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
import { Order } from './order.entity';

@Entity()
export class Customer extends BaseEntity {
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
  @OneToMany(() => Order, (order) => order.sender)
  orders: Order[];
}
