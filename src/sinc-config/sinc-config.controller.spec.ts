import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SincConfig } from './entities/sinc-config.entity';
import { SincConfigController } from './sinc-config.controller';
import { SincConfigRepository } from './sinc-config.repository';
import { SincConfigService } from './sinc-config.service';

describe('SincConfigController', () => {
  let controller: SincConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SincConfigController],
      providers: [
        SincConfigService,
        {
          provide: getRepositoryToken(SincConfig),
          useClass: SincConfigRepository,
        },
      ],
    }).compile();

    controller = module.get<SincConfigController>(SincConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
