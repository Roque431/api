import { Request, Response } from 'express';
import { ClienteService } from '../../application/services/cliente.service';

const clienteService = new ClienteService();

export const getClientes = async (req: Request, res: Response): Promise<Response> => {
  const clientes = await clienteService.obtenerTodosLosClientes();
  return res.json(clientes);
};



export const createCliente = async (req: Request, res: Response) => {
  try {
    const cliente = await clienteService.crearCliente(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const updateCliente = async (req: Request, res: Response): Promise<Response> => {
  await clienteService.actualizarCliente(parseInt(req.params.id, 10), req.body);
  return res.status(204).send();
};

export const deleteCliente = async (req: Request, res: Response): Promise<Response> => {
  await clienteService.eliminarCliente(parseInt(req.params.id, 10));
  return res.status(204).send();
};
