"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepositoryImpl = void 0;
const typeorm_1 = require("typeorm");
const cliente_models_1 = require("../../infrastructure/models/cliente.models");
class ClienteRepositoryImpl {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(cliente_models_1.Cliente);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne({ where: { id_cliente: id } });
        });
    }
    save(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(cliente);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
        });
    }
    // Implementa el método update
    update(id, clienteData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.update(id, clienteData);
        });
    }
}
exports.ClienteRepositoryImpl = ClienteRepositoryImpl;
