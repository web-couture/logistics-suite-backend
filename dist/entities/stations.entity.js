"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Station = void 0;
const typeorm_1 = require("typeorm");
const address_entity_1 = require("./address.entity");
const office_staff_entity_1 = require("./office-staff.entity");
const trip_staff_entity_1 = require("./trip-staff.entity");
let Station = class Station extends typeorm_1.BaseEntity {
};
exports.Station = Station;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Station.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Station.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Station.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_entity_1.Address, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", address_entity_1.Address)
], Station.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => office_staff_entity_1.OfficePersonnel, (personel) => personel.station),
    __metadata("design:type", Array)
], Station.prototype, "officePersonnel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => trip_staff_entity_1.TripPersonnel, (personnel) => personnel.currentStation),
    __metadata("design:type", Array)
], Station.prototype, "tripPersonnel", void 0);
exports.Station = Station = __decorate([
    (0, typeorm_1.Entity)()
], Station);
//# sourceMappingURL=stations.entity.js.map