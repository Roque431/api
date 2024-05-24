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

  async update(id: number, clienteData: Partial<Cliente>): Promise<Cliente | null> {
    const cliente = await this.findById(id);
    if (!cliente) {
      return null;
    }
    Object.assign(cliente, clienteData);
    return await this.repository.save(cliente);
  }
}
