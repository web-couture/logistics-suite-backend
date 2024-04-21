import { BaseEntity } from 'typeorm';
import { Country } from './countries.entity';
import { City } from './cities.entity';
import { Address } from './address.entity';
export declare class State extends BaseEntity {
    id: number;
    name: string;
    code: string;
    latitude: number;
    longitude: number;
    country: Country;
    countryId: number;
    cities: City[];
    addresses: Address[];
}
