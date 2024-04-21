import { BaseEntity } from 'typeorm';
export declare class Config extends BaseEntity {
    id: number;
    hqId: string | null;
    customerCareLine: string | null;
    vat: number;
    insuranceFactor: number;
    ecommerceFactor: number;
    expressMultiplication: number;
    distanceFactor: number;
    distanceThreshold: number;
    createdAt: Date;
    updatedAt: Date;
}
