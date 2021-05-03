import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { CreateSincConfigDto } from './dto/create-sinc-config.dto';
import { UpdateSincConfigDto } from './dto/update-sinc-config.dto';
import { SincConfig } from './entities/sinc-config.entity';
import { SincConfigRepository } from './sinc-config.repository';
@Injectable()
export class SincConfigService {
  constructor(
    @InjectRepository(SincConfigRepository)
    private sincConfigRepository: SincConfigRepository,
  ) {}
  create(createSincConfigDto: CreateSincConfigDto): Promise<SincConfig> {
    return this.sincConfigRepository.save(createSincConfigDto);
  }

  findAll(): Promise<SincConfig[]> {
    return this.sincConfigRepository.findAllSincConfig();
  }

  findOne(id: string): Promise<SincConfig> {
    return this.sincConfigRepository.findOneSincConfig(id);
  }

  update(
    id: string,
    updateSincConfigDto: UpdateSincConfigDto,
  ): Promise<SincConfig> {
    return this.sincConfigRepository.updateSincConfig(id, updateSincConfigDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.sincConfigRepository.removeSincConfig(id);
  }
}
