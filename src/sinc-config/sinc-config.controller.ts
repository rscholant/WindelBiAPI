import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SincConfigService } from './sinc-config.service';
import { CreateSincConfigDto } from './dto/create-sinc-config.dto';
import { UpdateSincConfigDto } from './dto/update-sinc-config.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('sinc-config')
export class SincConfigController {
  constructor(private readonly sincConfigService: SincConfigService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSincConfigDto: CreateSincConfigDto) {
    return this.sincConfigService.create(createSincConfigDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.sincConfigService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.sincConfigService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateSincConfigDto: UpdateSincConfigDto,
  ) {
    return this.sincConfigService.update(id, updateSincConfigDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.sincConfigService.remove(id);
  }
}
