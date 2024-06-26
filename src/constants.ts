import * as dotenv from 'dotenv';
dotenv.config();
export const DBTYPE = process.env.DBTYPE;
export const DBPORT = process.env.DBPORT;
export const DBHOST = process.env.DBHOST;
export const DBUSER = process.env.DBUSER;
export const DBPASSWORD = process.env.DBPASSWORD;
export const DB = process.env.DB;
export const DATA_SOURCE = 'DATA_SOURCE';
export const STATE_REPOSITORY = 'STATE_REPOSITORY';
export const LGA_REPOSITORY = 'LGA_REPOSITORY';
export const STATIONS_REPOSITORY = 'STATIONS_REPOSITORY';
