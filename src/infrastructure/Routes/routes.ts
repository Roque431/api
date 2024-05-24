import { Router } from 'express';
import { createCliente, deleteCliente,  getClientes, updateCliente } from '../controllers/cliente.controller';

const router = Router();

router.post('/clientes', createCliente);
router.get('/clientes', getClientes);

router.put('/clientes/:id', updateCliente);
router.delete('/clientes/:id', deleteCliente);

export default router;
