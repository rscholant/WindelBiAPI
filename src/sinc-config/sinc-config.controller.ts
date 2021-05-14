import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { SincConfigService } from './sinc-config.service';
import { CreateSincConfigDto } from './dto/create-sinc-config.dto';
import { UpdateSincConfigDto } from './dto/update-sinc-config.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/users/dto/user.dto';

@Controller('sinc-config')
export class SincConfigController {
  constructor(private readonly sincConfigService: SincConfigService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSincConfigDto: CreateSincConfigDto, @Req() req: any) {
    const user = req.user as UserDto;
    return this.sincConfigService.create(createSincConfigDto, user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req: any) {
    const user = req.user as UserDto;
    return this.sincConfigService.findAll(user);
  }
  @Post('req-all')
  @UseGuards(AuthGuard('jwt'))
  requestAllSincConfig(@Req() req: any) {
    const user = req.user as UserDto;
    return this.sincConfigService.requestAllSincConfig(user);
  }
  @Post('req/:id')
  @UseGuards(AuthGuard('jwt'))
  requestSincConfig(@Param('id') id: string, @Req() req: any) {
    const user = req.user as UserDto;
    return this.sincConfigService.requestSincConfig(user, id);
  }
  @Get('is-newer/:id')
  @UseGuards(AuthGuard('jwt'))
  findIsNewer(@Param('id') id: number, @Req() req: any) {
    const user = req.user as UserDto;
    return this.sincConfigService.findIsNewer(id, user);
  }
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string, @Req() req: any) {
    const user = req.user as UserDto;
    return this.sincConfigService.findOne(id, user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateSincConfigDto: UpdateSincConfigDto,
    @Req() req: any,
  ) {
    const user = req.user as UserDto;
    return this.sincConfigService.update(id, updateSincConfigDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.sincConfigService.remove(id);
  }
}
