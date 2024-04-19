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
import { City } from './cities.entity';

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  streetAddress: string;
  @ManyToOne(() => City, (city) => city.addresses, {
    nullable: true,
    eager: true,
  })
  city: City | null;
  @ManyToOne(() => State, (state) => state.addresses, { eager: true })
  state: State;
  @Column()
  stateId: number;
  @Column({
    nullable: true,
  })
  cityId: number | null;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  get fullAddress(): string {
    return `${this.state?.name} ${this.city?.name || ''} ${this.streetAddress}`;
  }
}
