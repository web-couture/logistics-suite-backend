import { DB, DBHOST, DBPASSWORD, DBPORT, DBTYPE, DBUSER } from 'src/constants';
import { DataSource } from 'typeorm';

export const databaseProvider = {
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    const dataSource = new DataSource({
      type: DBTYPE as any,
      host: DBHOST,
      port: +DBPORT,
      username: DBUSER,
      password: DBPASSWORD,
      database: DB,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    });

    return dataSource.initialize();
  },
};
