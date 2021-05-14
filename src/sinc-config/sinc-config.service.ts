import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/users/dto/user.dto';
import { DeleteResult } from 'typeorm';
import { CreateSincConfigDto } from './dto/create-sinc-config.dto';
import { UpdateSincConfigDto } from './dto/update-sinc-config.dto';
import { SincConfig } from './entities/sinc-config.entity';
import { SincConfigRepository } from './sinc-config.repository';
import { UsersService } from 'src/users/users.service';
import { AppGateway } from 'src/app.gateway';
@Injectable()
export class SincConfigService {
  constructor(
    @InjectRepository(SincConfigRepository)
    private sincConfigRepository: SincConfigRepository,
    private readonly usersService: UsersService,
    private readonly appGateway: AppGateway,
  ) {}
  async create(
    createSincConfigDto: CreateSincConfigDto,
    user: UserDto,
  ): Promise<SincConfig> {
    const userData = await this.usersService.findOne(user.id);
    const sincConfig = await this.sincConfigRepository.createSincConfig(
      createSincConfigDto,
      userData,
    );
    await this.appGateway.sendSincConfig(userData, sincConfig);
    return sincConfig;
  }
  async requestAllSincConfig(user: UserDto): Promise<void> {
    const userData = await this.usersService.findOne(user.id);
    await this.appGateway.requestAllSincConfig(userData);
  }
  async requestSincConfig(user: UserDto, id: string): Promise<void> {
    const userData = await this.usersService.findOne(user.id);
    const sincConfig = await this.sincConfigRepository.findOneSincConfig(
      id,
      userData,
    );
    await this.appGateway.requestSincConfig(userData, sincConfig);
  }
  async findAll({ id }: UserDto): Promise<SincConfig[]> {
    const user = await this.usersService.findOne(id);
    const sincConfigs = await this.sincConfigRepository.findAllSincConfig(user);
    return sincConfigs;
  }
  async findIsNewer(id: number, user: UserDto): Promise<SincConfig> {
    const userData = await this.usersService.findOne(user.id);
    return this.sincConfigRepository.findIsNewerSincConfig(id, userData);
  }
  async findOne(id: string, user: UserDto): Promise<SincConfig> {
    const userData = await this.usersService.findOne(user.id);
    const sincConfigs = await this.sincConfigRepository.findOneSincConfig(
      id,
      userData,
    );
    return sincConfigs;
  }

  async update(
    id: string,
    updateSincConfigDto: UpdateSincConfigDto,
    user: UserDto,
  ): Promise<SincConfig> {
    const userData = await this.usersService.findOne(user.id);
    const sincConfig = await this.sincConfigRepository.updateSincConfig(
      id,
      updateSincConfigDto,
      userData,
    );
    await this.appGateway.sendSincConfig(userData, sincConfig);
    return sincConfig;
  }

  remove(id: string): Promise<DeleteResult> {
    return this.sincConfigRepository.removeSincConfig(id);
  }
}
