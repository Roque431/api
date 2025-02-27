"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../controllers/cliente.controller");
const router = (0, express_1.Router)();
router.post('/clientes', cliente_controller_1.createCliente);
router.get('/clientes', cliente_controller_1.getClientes);
router.put('/clientes/:id', cliente_controller_1.updateCliente);
router.delete('/clientes/:id', cliente_controller_1.deleteCliente);
exports.default = router;
