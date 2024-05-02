import { BaseEntity } from 'typeorm';
import { Address } from './address.entity';
import { User } from './users.entity';
import { OfficePersonnel } from './office-staff.entity';
import { VehicleAssistant } from './vehicle-assistant.entity';
import { Driver } from './drivers.entity';
export declare enum StaffRole {
    DIRECTOR = "director",
    HR = "hr",
    MANAGER = "manager",
    STATION_OFFICER = "station officer",
    VEHICLE_ASSISTANT = "vehicle assistant",
    DRIVER = "DRIVER"
}
export declare class Staff extends BaseEntity {
    id: string;
    user: User;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    address: Address;
    role: StaffRole;
    officePersonnelInfo: OfficePersonnel | null;
    vehicleAssistantInfo: VehicleAssistant | null;
    driverInfo: Driver | null;
    createdAt: Date;
    updatedAt: Date;
    get fullName(): string;
}
