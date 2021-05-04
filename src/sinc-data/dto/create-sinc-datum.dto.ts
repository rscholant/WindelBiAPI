import { SincConfig } from 'src/sinc-config/entities/sinc-config.entity';
export class CreateSincDatumDto {
  readonly sincConfig: SincConfig;
  readonly dateSinc: Date;
  readonly data: Array<JSON>;
}
