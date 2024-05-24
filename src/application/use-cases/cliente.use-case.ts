import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../../infrastructure/models/cliente.models';

export class ClienteUseCase {
  constructor(private clienteService: ClienteService) {}

  async obtenerTodosLosClientes(): Promise<Cliente[]> {
    return await this.clienteService.obtenerTodosLosClientes();
  }


  async crearCliente(cliente: Cliente): Promise<Cliente> {
    return await this.clienteService.crearCliente(cliente);
  }

  async eliminarCliente(id: number): Promise<void> {
    await this.clienteService.eliminarCliente(id);
  }
}
