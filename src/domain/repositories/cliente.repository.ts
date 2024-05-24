import { Cliente } from '../../infrastructure/models/cliente.models';

export interface ClienteRepository {
  findAll(): Promise<Cliente[]>;
  findById(id: number): Promise<Cliente | null>;
  save(cliente: Cliente): Promise<Cliente>;
}
