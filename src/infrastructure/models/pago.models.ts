import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Reserva } from './reserva.models';

@Entity('Pago')
export class Pago {
  @PrimaryGeneratedColumn()
  id_pago!: number;

  @Column()
  id_reserva!: number;

  @ManyToOne(() => Reserva)
  @JoinColumn({ name: 'id_reserva' })
  reserva!: Reserva;

  @Column('decimal', { precision: 10, scale: 2 })
  monto!: number;

  @Column('date')
  fecha_pago!: string;

  @Column()
  método_pago!: string;
}
