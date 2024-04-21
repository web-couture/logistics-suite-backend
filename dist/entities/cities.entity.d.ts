import { BaseEntity } from 'typeorm';
import { State } from './states.entity';
import { Address } from './address.entity';
export declare class City extends BaseEntity {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    state: State;
    stateId: number;
    addresses: Address[];
}
