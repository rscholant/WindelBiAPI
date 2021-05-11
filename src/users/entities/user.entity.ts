import { SincConfig } from 'src/sinc-config/entities/sinc-config.entity';
import { SincDatum } from 'src/sinc-data/entities/sinc-datum.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  cnpj: string;

  @Column()
  status: number;

  @Column({ length: 50 })
  wsID: string;

  @OneToMany(() => SincConfig, (sincConfig) => sincConfig.user)
  sincConfigs: SincConfig[];

  @OneToMany(() => SincDatum, (sincDatum) => sincDatum.user)
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
