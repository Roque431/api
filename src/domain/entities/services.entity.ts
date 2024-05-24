import { Repository, getRepository } from 'typeorm';
import { Cliente } from '../../infrastructure/models/cliente.models';
import { ClienteRepository } from '../../domain/repositories/cliente.repository';

export class ClienteRepositoryImpl implements ClienteRepository {
  private repository: Repository<Cliente>;

  constructor() {
    this.repository = getRepository(Cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Cliente | null> {
    return await this.repository.findOne({ where: { id_cliente: id } });
  }

  async save(cliente: Cliente): Promise<Cliente> {
    return await this.repository.save(cliente);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  // Implementa el método update
  async update(id: number, clienteData: Partial<Cliente>): Promise<void> {
    await this.repository.update(id, clienteData);
  }
}
