import { BaseEntity } from 'typeorm';
import { State } from './states.entity';
import { City } from './cities.entity';
export declare class Address extends BaseEntity {
    id: string;
    streetAddress: string;
    city: City | null;
    state: State;
    stateId: number;
    cityId: number | null;
    createdAt: Date;
    updatedAt: Date;
    get fullAddress(): string;
}
