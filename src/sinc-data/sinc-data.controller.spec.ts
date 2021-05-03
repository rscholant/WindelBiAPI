import { Test, TestingModule } from '@nestjs/testing';
import { SincDataController } from './sinc-data.controller';
import { SincDataService } from './sinc-data.service';

describe('SincDataController', () => {
  let controller: SincDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SincDataController],
      providers: [SincDataService],
    }).compile();

    controller = module.get<SincDataController>(SincDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
