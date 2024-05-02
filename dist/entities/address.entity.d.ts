import { BaseEntity } from 'typeorm';
import { State } from './states.entity';
import { Lga } from './lgas.entity';
export declare class Address extends BaseEntity {
    id: string;
    streetAddress: string;
    lga: Lga | null;
    state: State;
    stateId: number;
    lgaId: number | null;
    createdAt: Date;
    updatedAt: Date;
    get fullAddress(): string;
}
