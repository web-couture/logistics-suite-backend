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
exports.Staff = exports.StaffRole = void 0;
const typeorm_1 = require("typeorm");
const address_entity_1 = require("./address.entity");
const users_entity_1 = require("./users.entity");
const office_staff_entity_1 = require("./office-staff.entity");
const vehicle_assistant_entity_1 = require("./vehicle-assistant.entity");
const drivers_entity_1 = require("./drivers.entity");
var StaffRole;
(function (StaffRole) {
    StaffRole["DIRECTOR"] = "director";
    StaffRole["HR"] = "hr";
    StaffRole["MANAGER"] = "manager";
    StaffRole["STATION_OFFICER"] = "station officer";
    StaffRole["VEHICLE_ASSISTANT"] = "vehicle assistant";
    StaffRole["DRIVER"] = "DRIVER";
})(StaffRole || (exports.StaffRole = StaffRole = {}));
let Staff = class Staff extends typeorm_1.BaseEntity {
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
};
exports.Staff = Staff;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Staff.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.User, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", users_entity_1.User)
], Staff.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Staff.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Staff.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Staff.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_entity_1.Address, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", address_entity_1.Address)
], Staff.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: StaffRole,
    }),
    __metadata("design:type", String)
], Staff.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => office_staff_entity_1.OfficePersonnel, (personnel) => personnel.staffInfo, {
        nullable: true,
    }),
    __metadata("design:type", office_staff_entity_1.OfficePersonnel)
], Staff.prototype, "officePersonnelInfo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => vehicle_assistant_entity_1.VehicleAssistant, (personel) => personel.staffInfo, {
        nullable: true,
    }),
    __metadata("design:type", vehicle_assistant_entity_1.VehicleAssistant)
], Staff.prototype, "vehicleAssistantInfo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => drivers_entity_1.Driver, (personel) => personel.staffInfo, {
        nullable: true,
    }),
    __metadata("design:type", drivers_entity_1.Driver)
], Staff.prototype, "driverInfo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Staff.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Staff.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Staff.prototype, "fullName", null);
exports.Staff = Staff = __decorate([
    (0, typeorm_1.Entity)()
], Staff);
//# sourceMappingURL=staff.entity.js.map