import { DataSource } from 'typeorm';
import { Cliente } from '../models/cliente.models';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'roque',
  password: process.env.DB_PASSWORD || 'america123',
  database: process.env.DB_NAME || 'hexagonal',
  synchronize: true,
  logging: false,
  entities: [Cliente],
  migrations: [],
  subscribers: [],
});
