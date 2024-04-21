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
exports.City = void 0;
const typeorm_1 = require("typeorm");
const states_entity_1 = require("./states.entity");
const address_entity_1 = require("./address.entity");
let City = class City extends typeorm_1.BaseEntity {
};
exports.City = City;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], City.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'double',
    }),
    __metadata("design:type", Number)
], City.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'double',
    }),
    __metadata("design:type", Number)
], City.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => states_entity_1.State, (state) => state.cities, { eager: false }),
    __metadata("design:type", states_entity_1.State)
], City.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], City.prototype, "stateId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => address_entity_1.Address, (address) => address.city),
    __metadata("design:type", Array)
], City.prototype, "addresses", void 0);
exports.City = City = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)('city_in_state', ['countryId', 'name']),
    (0, typeorm_1.Unique)('location', ['latitude', 'longitude'])
], City);
//# sourceMappingURL=cities.entity.js.map