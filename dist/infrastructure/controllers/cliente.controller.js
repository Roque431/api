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
exports.deleteCliente = exports.updateCliente = exports.createCliente = exports.getClientes = void 0;
const cliente_service_1 = require("../../application/services/cliente.service");
const clienteService = new cliente_service_1.ClienteService();
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientes = yield clienteService.obtenerTodosLosClientes();
    return res.json(clientes);
});
exports.getClientes = getClientes;
const createCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cliente = yield clienteService.crearCliente(req.body);
        res.status(201).json(cliente);
    }
    catch (error) {
        console.error('Error al crear cliente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.createCliente = createCliente;
const updateCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield clienteService.actualizarCliente(parseInt(req.params.id, 10), req.body);
    return res.status(204).send();
});
exports.updateCliente = updateCliente;
const deleteCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield clienteService.eliminarCliente(parseInt(req.params.id, 10));
    return res.status(204).send();
});
exports.deleteCliente = deleteCliente;
