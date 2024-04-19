import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Country } from './countries.entity';
import { City } from './cities.entity';
import { Address } from './address.entity';

@Entity()
@Unique('state_in_country', ['countryId', 'name'])
@Unique('location', ['latitude', 'longitude'])
export class State extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  code: string;
  @Column({
    type: 'double',
  })
  latitude: number;
  @Column({
    type: 'double',
  })
  longitude: number;
  @ManyToOne(() => Country, (country) => country.states, { eager: false })
  country: Country;
  @Column()
  countryId: number;
  @OneToMany(() => City, (city) => city.state)
  cities: City[];
  @OneToMany(() => Address, (address) => address.state)
  addresses: Address[];
}
