import { SincDatum } from './entities/sinc-datum.entity';
import { EntityNotFoundError, EntityRepository, Repository } from 'typeorm';
import { CreateSincDatumDto } from './dto/create-sinc-datum.dto';
import { UpdateSincDatumDto } from './dto/update-sinc-datum.dto';
import { User } from 'src/users/entities/user.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

@EntityRepository(SincDatum)
export class SincDataRepository extends Repository<SincDatum> {
  createSincDatum = async (sincDatumDto: CreateSincDatumDto, user: User) => {
    const { sincConfig, dateSinc, data } = sincDatumDto;
    const dateSincDate = new Date(dateSinc);
    const previousData = await this.find({ where: { sincConfig, user } });
    if (previousData && previousData.length > 0) {
      const dados: CreateSincDatumDto = previousData[0];
      return this.save({ ...dados, data, dateSincDate });
    }
    return this.save({ sincConfig, dateSincDate, data, user });
  };
  findAllSincDatum = async (user: User) => {
    return this.find({ where: { user }, relations: ['sincConfig', 'user'] });
  };
  findOneSincDatum = async (id: string, user: User) => {
    return this.find({ where: { id, user } });
  };
  updateSincDatum = async (
    id: string,
    sincDatumDto: UpdateSincDatumDto,
    user: User,
  ) => {
    return this.save({ ...{ sincDatumDto, user }, id: Number(id) });
  };
  removeSincDatum = async (id: string) => {
    try {
      await this.findOneOrFail(id);
      await this.delete(id);
    } catch (err) {
      if (err instanceof EntityNotFoundError)
        throw new HttpException(
          'Record not found for removal 😢',
          HttpStatus.BAD_REQUEST,
        );
    }
  };
}
