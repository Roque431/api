import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id_cliente!: number;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column()
  email!: string;

  @Column()
  telefono!: string;

  @Column()
  direccion!: string;
}
