import { AppDataSource } from '../../infrastructure/database/data-source';
import { Cliente } from '../../infrastructure/models/cliente.models';

export class ClienteService {
  private clienteRepository = AppDataSource.getRepository(Cliente);

  async obtenerTodosLosClientes(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async crearCliente(data: Partial<Cliente>): Promise<Cliente> {
    const nuevoCliente = this.clienteRepository.create(data);
    return this.clienteRepository.save(nuevoCliente);
  }

  async actualizarCliente(id: number, data: Partial<Cliente>): Promise<void> {
    await this.clienteRepository.update(id, data);
  }

  async eliminarCliente(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}
