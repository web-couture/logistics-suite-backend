"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProvider = {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
        const dataSource = new typeorm_1.DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'mart',
            password: 'iamme123',
            database: 'test',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
        });
        return dataSource.initialize();
    },
};
//# sourceMappingURL=database.providers.js.map