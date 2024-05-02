import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { State } from './states.entity';
import { Lga } from './lgas.entity';

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  streetAddress: string;
  @ManyToOne(() => Lga, (lga) => lga.addresses, {
    nullable: true,
    eager: true,
  })
  lga: Lga | null;
  @ManyToOne(() => State, (state) => state.addresses, { eager: true })
  state: State;
  @Column()
  stateId: number;
  @Column({
    nullable: true,
  })
  lgaId: number | null;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  get fullAddress(): string {
    return `${this.state?.name} ${this.lga?.name || ''} ${this.streetAddress}`;
  }
}
