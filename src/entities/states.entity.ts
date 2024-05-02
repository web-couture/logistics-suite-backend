import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Lga } from './lgas.entity';
import { Address } from './address.entity';

@Entity()
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
  @Column()
  capitalCode: string;
  @Column({
    type: 'double',
  })
  latitude: number;
  @Column({
    type: 'double',
  })
  longitude: number;
  @OneToMany(() => Lga, (lga) => lga.state, { cascade: true })
  lgas: Lga[];
  @OneToMany(() => Address, (address) => address.state)
  addresses: Address[];
}
