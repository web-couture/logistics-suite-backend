import { DataSource } from 'typeorm';
export declare const databaseProvider: {
    provide: string;
    useFactory: () => Promise<DataSource>;
};
