"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const cliente_models_1 = require("../models/cliente.models");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME || 'roque',
    password: process.env.DB_PASSWORD || 'america123',
    database: process.env.DB_NAME || 'hexagonal',
    synchronize: true,
    logging: false,
    entities: [cliente_models_1.Cliente],
    migrations: [],
    subscribers: [],
});
