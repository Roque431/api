import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Servicio_Adicionales')
export class Servicio{
  @PrimaryGeneratedColumn()
  id_servicio!: number;

  @Column()
  nombre!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  costo!: number;
}
