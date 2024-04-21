import { BaseEntity } from 'typeorm';
import { State } from './states.entity';
export declare class Country extends BaseEntity {
    id: number;
    name: string;
    code: string;
    latitude: number;
    longitude: number;
    currency: string;
    states: State[];
}
