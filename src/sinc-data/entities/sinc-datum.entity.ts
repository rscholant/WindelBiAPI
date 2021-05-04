import { SincConfig } from 'src/sinc-config/entities/sinc-config.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class SincDatum {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.sincDatum)
  user: User;

  @ManyToOne(() => SincConfig, (sincConfig) => sincConfig.sincDatum)
  sincConfig: SincConfig;

  @Column('timestamp')
  dateSinc: Date;

  @Column({ type: 'json' })
  data: Array<JSON>;

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
