import { BaseEntity } from 'typeorm';
import { Staff } from './staff.entity';
import { Station } from './stations.entity';
export declare class OfficePersonnel extends BaseEntity {
    id: string;
    staffInfo: Staff;
    station: Station | null;
}
