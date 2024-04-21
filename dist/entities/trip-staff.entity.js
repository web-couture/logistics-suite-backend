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
exports.TripPersonnel = void 0;
const typeorm_1 = require("typeorm");
const staff_entity_1 = require("./staff.entity");
const stations_entity_1 = require("./stations.entity");
let TripPersonnel = class TripPersonnel extends typeorm_1.BaseEntity {
};
exports.TripPersonnel = TripPersonnel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TripPersonnel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => staff_entity_1.Staff, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", staff_entity_1.Staff)
], TripPersonnel.prototype, "staffInfo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => stations_entity_1.Station, (station) => station.officePersonnel),
    __metadata("design:type", stations_entity_1.Station)
], TripPersonnel.prototype, "currentStation", void 0);
exports.TripPersonnel = TripPersonnel = __decorate([
    (0, typeorm_1.Entity)()
], TripPersonnel);
//# sourceMappingURL=trip-staff.entity.js.map