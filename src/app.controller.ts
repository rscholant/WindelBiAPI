import { Controller, Get } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appGateway: AppGateway,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
