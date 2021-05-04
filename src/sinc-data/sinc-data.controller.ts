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
import { SincDataService } from './sinc-data.service';
import { CreateSincDatumDto } from './dto/create-sinc-datum.dto';
import { UpdateSincDatumDto } from './dto/update-sinc-datum.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/users/dto/user.dto';

@Controller('sinc-data')
export class SincDataController {
  constructor(private readonly sincDataService: SincDataService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSincDatumDto: CreateSincDatumDto, @Req() req: any) {
    const user = req.user as UserDto;
    return this.sincDataService.create(createSincDatumDto, user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req: any) {
    const user = req.user as UserDto;
    return this.sincDataService.findAll(user);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string, @Req() req: any) {
    const user = req.user as UserDto;
    return this.sincDataService.findOne(id, user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateSincDatumDto: UpdateSincDatumDto,
    @Req() req: any,
  ) {
    const user = req.user as UserDto;
    return this.sincDataService.update(id, updateSincDatumDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.sincDataService.remove(id);
  }
}
