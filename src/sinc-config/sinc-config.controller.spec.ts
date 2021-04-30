import { Test, TestingModule } from '@nestjs/testing';
import { SincConfigController } from './sinc-config.controller';
import { SincConfigService } from './sinc-config.service';

describe('SincConfigController', () => {
  let controller: SincConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SincConfigController],
      providers: [SincConfigService],
    }).compile();

    controller = module.get<SincConfigController>(SincConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
