import { PartialType } from '@nestjs/mapped-types';
import { CreateSincConfigDto } from './create-sinc-config.dto';

export class UpdateSincConfigDto extends PartialType(CreateSincConfigDto) {}
