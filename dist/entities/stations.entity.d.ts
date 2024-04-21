import { BaseEntity } from 'typeorm';
import { Address } from './address.entity';
import { OfficePersonnel } from './office-staff.entity';
import { TripPersonnel } from './trip-staff.entity';
export declare class Station extends BaseEntity {
    id: string;
    name: string;
    code: string;
    address: Address;
    officePersonnel: OfficePersonnel[];
    tripPersonnel: TripPersonnel[];
    station: Station | null;
    phoneNumbers: string[];
    createdAt: Date;
    updatedAt: Date;
}
