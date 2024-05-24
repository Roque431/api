"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = require("./infrastructure/database/data-source");
const routes_1 = __importDefault(require("./infrastructure/Routes/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware para parsear JSON
app.use(express_1.default.json());
data_source_1.AppDataSource.initialize().then(() => {
    console.log("Conexión a la base de datos establecida");
    // Usar rutas desde el router
    app.use('/api', routes_1.default);
    const server = http_1.default.createServer(app);
    server.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
    app.get('/', (req, res) => {
        res.send('¡Hola Mundo!');
    });
}).catch(error => console.log("Error al conectar a la base de datos:", error));
