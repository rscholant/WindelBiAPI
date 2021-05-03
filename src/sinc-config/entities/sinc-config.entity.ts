import { SincDatum } from 'src/sinc-data/entities/sinc-datum.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class SincConfig {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 2000 })
  sql: string;

  @Column({ length: 2000 })
  tables: string;

  @OneToOne(() => SincDatum, (sincDatum) => sincDatum.sincConfig)
  sincDatum: SincDatum[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public createdAt: Date;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;
}
