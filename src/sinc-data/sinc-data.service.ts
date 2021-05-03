import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { CreateSincDatumDto } from './dto/create-sinc-datum.dto';
import { UpdateSincDatumDto } from './dto/update-sinc-datum.dto';
import { SincDatum } from './entities/sinc-datum.entity';
import { SincDataRepository } from './sinc-data.repository';

@Injectable()
export class SincDataService {
  constructor(
    @InjectRepository(SincDataRepository)
    private sincDataRepository: SincDataRepository,
    private readonly usersService: UsersService,
  ) {}

  async create(createSincDatumDto: CreateSincDatumDto, { id }: UserDto) {
    const user = await this.usersService.findOne(id);
    return this.sincDataRepository.createSincDatum(createSincDatumDto, user);
  }

  async findAll({ id }: UserDto): Promise<SincDatum[]> {
    const user = await this.usersService.findOne(id);
    return this.sincDataRepository.findAllSincDatum(user);
  }

  async findOne(id: string, user: UserDto) {
    const userData = await this.usersService.findOne(user.id);
    return this.sincDataRepository.findOneSincDatum(id, userData);
  }

  async update(
    id: string,
    updateSincDatumDto: UpdateSincDatumDto,
    user: UserDto,
  ) {
    const userData = await this.usersService.findOne(user.id);
    return this.sincDataRepository.updateSincDatum(
      id,
      updateSincDatumDto,
      userData,
    );
  }

  remove(id: string) {
    return this.sincDataRepository.removeSincDatum(id);
  }
}
