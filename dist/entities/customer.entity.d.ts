import { BaseEntity } from 'typeorm';
import { Address } from './address.entity';
export declare class customer extends BaseEntity {
    id: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string | null;
    address: Address;
}
