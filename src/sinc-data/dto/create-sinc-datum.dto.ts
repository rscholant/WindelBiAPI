import { SincConfigDto } from '../../sinc-config/dto/sinc-config.dto';
export class CreateSincDatumDto {
  readonly Config: SincConfigDto;
  readonly dateSinc: Date;
  readonly data: JSON;
}
