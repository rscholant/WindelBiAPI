import { SincConfig } from './entities/sinc-config.entity';
import {
  EntityNotFoundError,
  EntityRepository,
  Repository,
  MoreThan,
} from 'typeorm';
import { CreateSincConfigDto } from './dto/create-sinc-config.dto';
import { UpdateSincConfigDto } from './dto/update-sinc-config.dto';
import { User } from 'src/users/entities/user.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
@EntityRepository(SincConfig)
export class SincConfigRepository extends Repository<SincConfig> {
  createSincConfig = async (sincConfigDTO: CreateSincConfigDto, user: User) => {
    const { sql, tables } = sincConfigDTO;
    return this.save({ sql, tables, user });
  };
  findAllSincConfig = async (user: User) => {
    console.log(user);
    return this.find({ where: { user } });
  };

  findIsNewerSincConfig = async (id: number, user: User) => {
    const sincConfig = await this.find({
      where: { id: MoreThan(id), user },
      relations: ['sincDatum'],
    });
    return sincConfig[0];
  };
  findOneSincConfig = async (id: string, user: User) => {
    const sincConfig = await this.find({
      where: { id: parseInt(id, 10), user },
      relations: ['sincDatum'],
    });
    return sincConfig[0];
  };
  updateSincConfig = async (
    id: string,
    sincConfigDto: UpdateSincConfigDto,
    user: User,
  ) => {
    return this.save({ ...sincConfigDto, id: Number(id), user: user });
  };
  removeSincConfig = async (id: string) => {
    try {
      await this.findOneOrFail(id);
      return this.delete(id);
    } catch (err) {
      if (err instanceof EntityNotFoundError)
        throw new HttpException(
          'Record not found for removal 😢',
          HttpStatus.BAD_REQUEST,
        );
    }
  };
}
