import { BaseEntity, Entity } from 'typeorm';
import { Address } from './address.entity';
import { Staff } from './staff.entity';

@Entity()
export class Station extends BaseEntity {
  id: number;
  name: string;
  code: string;
  addressId: string;
  address: Address;
  staff: Staff[];
  phoneNumbers: string[];
  createdAt: Date;
  updatedAt: Date;
}
