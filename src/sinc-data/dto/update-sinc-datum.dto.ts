import { PartialType } from '@nestjs/mapped-types';
import { CreateSincDatumDto } from './create-sinc-datum.dto';

export class UpdateSincDatumDto extends PartialType(CreateSincDatumDto) {}
