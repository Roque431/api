import http from 'http';
import express from 'express';
import "reflect-metadata";
import dotenv from 'dotenv';
import { AppDataSource } from './infrastructure/database/data-source';
import router from './infrastructure/Routes/routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

AppDataSource.initialize().then(() => {
  console.log("Conexión a la base de datos establecida");

  // Usar rutas desde el router
  app.use('/api', router);

  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });

  app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
  });

}).catch(error => console.log("Error al conectar a la base de datos:", error));
