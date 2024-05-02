import { BaseEntity } from 'typeorm';
import { Staff } from './staff.entity';
import { Station } from './stations.entity';
import { Order } from './order.entity';
export declare class OfficePersonnel extends BaseEntity {
    id: string;
    staffInfo: Staff;
    station: Station | null;
    stationId: string;
    orders: Order[];
}
