import { BaseEntity } from 'typeorm';
import { Lga } from './lgas.entity';
import { Address } from './address.entity';
export declare class State extends BaseEntity {
    id: number;
    name: string;
    code: string;
    capitalCode: string;
    latitude: number;
    longitude: number;
    lgas: Lga[];
    addresses: Address[];
}
