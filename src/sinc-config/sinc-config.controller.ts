import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SincConfigService } from './sinc-config.service';
import { CreateSincConfigDto } from './dto/create-sinc-config.dto';
import { UpdateSincConfigDto } from './dto/update-sinc-config.dto';

@Controller('sinc-config')
export class SincConfigController {
  constructor(private readonly sincConfigService: SincConfigService) {}

  @Post()
  create(@Body() createSincConfigDto: CreateSincConfigDto) {
    return this.sincConfigService.create(createSincConfigDto);
  }

  @Get()
  findAll() {
    return this.sincConfigService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sincConfigService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSincConfigDto: UpdateSincConfigDto,
  ) {
    return this.sincConfigService.update(id, updateSincConfigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sincConfigService.remove(id);
  }
}
