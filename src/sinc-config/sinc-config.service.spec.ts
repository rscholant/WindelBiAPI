import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SincConfig } from './entities/sinc-config.entity';
import { SincConfigRepository } from './sinc-config.repository';
import { SincConfigService } from './sinc-config.service';

describe('SincConfigService', () => {
  let service: SincConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SincConfigService,
        {
          provide: getRepositoryToken(SincConfig),
          useClass: SincConfigRepository,
        },
      ],
    }).compile();

    service = module.get<SincConfigService>(SincConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
