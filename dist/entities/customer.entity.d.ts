import { BaseEntity } from 'typeorm';
import { Address } from './address.entity';
import { Order } from './order.entity';
export declare enum CustomerType {
    INDIVIDUAL = "individual",
    CORPORATE = "corporate"
}
export declare class Customer extends BaseEntity {
    id: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string | null;
    address: Address;
    customerType: CustomerType;
    orders: Order[];
    createdAt: Date;
    updatedAt: Date;
}
