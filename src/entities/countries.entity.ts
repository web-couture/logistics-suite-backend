import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { State } from './states.entity';
@Entity()
@Unique('location', ['latitude', 'longitude'])
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({
    unique: true,
  })
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
  @Column()
  currency: string;
  @OneToMany(() => State, (state) => state.country)
  states: State[];
}
