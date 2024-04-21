import { BaseEntity } from 'typeorm';
import { Staff } from './staff.entity';
import { Station } from './stations.entity';
export declare class TripPersonnel extends BaseEntity {
    id: string;
    staffInfo: Staff;
    currentStation: Station;
}
