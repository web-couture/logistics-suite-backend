"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = void 0;
const constants_1 = require("../constants");
const typeorm_1 = require("typeorm");
exports.databaseProvider = {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
        const dataSource = new typeorm_1.DataSource({
            type: constants_1.DBTYPE,
            host: constants_1.DBHOST,
            port: +constants_1.DBPORT,
            username: constants_1.DBUSER,
            password: constants_1.DBPASSWORD,
            database: constants_1.DB,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
        });
        return dataSource.initialize();
    },
};
//# sourceMappingURL=database.providers.js.map