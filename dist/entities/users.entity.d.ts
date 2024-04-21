import { BaseEntity } from 'typeorm';
export declare enum UserRole {
    DEVELOPER = "developer",
    STAFF = "staff",
    CUSTOMER = "customer"
}
export declare class User extends BaseEntity {
    id: string;
    email: string;
    username: string;
    password: string;
    pin: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    validatePassword(password: string): Promise<boolean>;
    validatePin(pin: string): Promise<boolean>;
}
