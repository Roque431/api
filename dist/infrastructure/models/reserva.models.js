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
exports.Reserva = void 0;
const typeorm_1 = require("typeorm");
const cliente_models_1 = require("./cliente.models");
const habitacion_models_1 = require("./habitacion.models");
let Reserva = class Reserva {
};
exports.Reserva = Reserva;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reserva.prototype, "id_reserva", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Reserva.prototype, "id_cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_models_1.Cliente),
    (0, typeorm_1.JoinColumn)({ name: 'id_cliente' }),
    __metadata("design:type", cliente_models_1.Cliente)
], Reserva.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Reserva.prototype, "id_habitacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => habitacion_models_1.Habitacion),
    (0, typeorm_1.JoinColumn)({ name: 'id_habitacion' }),
    __metadata("design:type", habitacion_models_1.Habitacion)
], Reserva.prototype, "habitacion", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", String)
], Reserva.prototype, "fecha_entrada", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", String)
], Reserva.prototype, "fecha_salida", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reserva.prototype, "estado", void 0);
exports.Reserva = Reserva = __decorate([
    (0, typeorm_1.Entity)('Reserva')
], Reserva);
