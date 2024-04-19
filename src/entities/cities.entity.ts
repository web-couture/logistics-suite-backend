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
@Unique('city_in_state', ['countryId', 'name'])
@Unique('location', ['latitude', 'longitude'])
export class City extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column({
    type: 'double',
  })
  latitude: number;
  @Column({
    type: 'double',
  })
  longitude: number;
  @ManyToOne(() => State, (state) => state.cities, { eager: false })
  state: State;
  @Column()
  stateId: number;
  @OneToMany(() => Address, (address) => address.city)
  addresses: Address[];
}
