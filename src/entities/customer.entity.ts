import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { Order } from './order.entity';

export enum CustomerType {
  INDIVIDUAL = 'individual',
  CORPORATE = 'corporate',
}

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
  @Column({ type: 'enum', enum: CustomerType })
  customerType: CustomerType;
  @OneToMany(() => Order, (order) => order.sender)
  orders: Order[];
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
