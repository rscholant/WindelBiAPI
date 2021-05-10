import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/users/dto/user.dto';
import { DeleteResult } from 'typeorm';
import { CreateSincConfigDto } from './dto/create-sinc-config.dto';
import { UpdateSincConfigDto } from './dto/update-sinc-config.dto';
import { SincConfig } from './entities/sinc-config.entity';
import { SincConfigRepository } from './sinc-config.repository';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class SincConfigService {
  constructor(
    @InjectRepository(SincConfigRepository)
    private sincConfigRepository: SincConfigRepository,
    private readonly usersService: UsersService,
  ) {}
  async create(
    createSincConfigDto: CreateSincConfigDto,
    user: UserDto,
  ): Promise<SincConfig> {
    const userData = await this.usersService.findOne(user.id);
    return this.sincConfigRepository.createSincConfig(
      createSincConfigDto,
      userData,
    );
  }

  async findAll({ id }: UserDto): Promise<SincConfig[]> {
    const user = await this.usersService.findOne(id);
    return this.sincConfigRepository.findAllSincConfig(user);
  }
  async findIsNewer(id: number, user: UserDto): Promise<SincConfig> {
    const userData = await this.usersService.findOne(user.id);
    return this.sincConfigRepository.findIsNewerSincConfig(id, userData);
  }
  async findOne(id: string, user: UserDto): Promise<SincConfig> {
    const userData = await this.usersService.findOne(user.id);
    return this.sincConfigRepository.findOneSincConfig(id, userData);
  }

  async update(
    id: string,
    updateSincConfigDto: UpdateSincConfigDto,
    user: UserDto,
  ): Promise<SincConfig> {
    const userData = await this.usersService.findOne(user.id);
    return this.sincConfigRepository.updateSincConfig(
      id,
      updateSincConfigDto,
      userData,
    );
  }

  remove(id: string): Promise<DeleteResult> {
    return this.sincConfigRepository.removeSincConfig(id);
  }
}
