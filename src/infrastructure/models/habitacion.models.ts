import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Habitacion')
export class Habitacion {
  @PrimaryGeneratedColumn()
  id_habitacion!: number;

  @Column()
  número_habitacion!: number;

  @Column()
  tipo!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_por_noche!: number;

  @Column()
  estado!: string;
}
