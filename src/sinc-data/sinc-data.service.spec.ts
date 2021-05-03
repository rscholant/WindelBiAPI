import { Test, TestingModule } from '@nestjs/testing';
import { SincDataService } from './sinc-data.service';

describe('SincDataService', () => {
  let service: SincDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SincDataService],
    }).compile();

    service = module.get<SincDataService>(SincDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
