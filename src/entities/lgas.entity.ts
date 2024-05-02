import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { State } from './states.entity';
import { Address } from './address.entity';

@Entity()
@Unique('lga_in_state', ['stateId', 'name'])
export class Lga extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @ManyToOne(() => State, (state) => state.lgas, { eager: false })
  state: State;
  @Column()
  stateId: number;
  @OneToMany(() => Address, (address) => address.lga)
  addresses: Address[];
}
