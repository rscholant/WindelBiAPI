import { Test, TestingModule } from '@nestjs/testing';
import { SincConfigService } from './sinc-config.service';

describe('SincConfigService', () => {
  let service: SincConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SincConfigService],
    }).compile();

    service = module.get<SincConfigService>(SincConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
