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
exports.ClienteService = void 0;
const data_source_1 = require("../../infrastructure/database/data-source");
const cliente_models_1 = require("../../infrastructure/models/cliente.models");
class ClienteService {
    constructor() {
        this.clienteRepository = data_source_1.AppDataSource.getRepository(cliente_models_1.Cliente);
    }
    obtenerTodosLosClientes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clienteRepository.find();
        });
    }
    crearCliente(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevoCliente = this.clienteRepository.create(data);
            return this.clienteRepository.save(nuevoCliente);
        });
    }
    actualizarCliente(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clienteRepository.update(id, data);
        });
    }
    eliminarCliente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clienteRepository.delete(id);
        });
    }
}
exports.ClienteService = ClienteService;
