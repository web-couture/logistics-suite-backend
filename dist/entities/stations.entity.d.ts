import { BaseEntity } from 'typeorm';
import { Address } from './address.entity';
import { OfficePersonnel } from './office-staff.entity';
import { Order } from './order.entity';
import { Driver } from './drivers.entity';
import { VehicleAssistant } from './vehicle-assistant.entity';
export declare class Station extends BaseEntity {
    id: string;
    name: string;
    code: string;
    address: Address;
    isRegional: boolean;
    officePersonnel: OfficePersonnel[];
    drivers: Driver[];
    vehicleAssistants: VehicleAssistant[];
    generatedOrders: Order[];
    incomingOrders: Order[];
    phoneNumbers: string[];
    createdAt: Date;
    updatedAt: Date;
}
