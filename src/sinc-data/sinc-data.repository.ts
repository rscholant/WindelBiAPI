import { SincDatum } from './entities/sinc-datum.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateSincDatumDto } from './dto/create-sinc-datum.dto';
import { UpdateSincDatumDto } from './dto/update-sinc-datum.dto';
import { User } from 'src/users/entities/user.entity';

@EntityRepository(SincDatum)
export class SincDataRepository extends Repository<SincDatum> {
  createSincDatum = async (sincDatumDto: CreateSincDatumDto, user: User) => {
    const { sincConfig, dateSinc, data } = sincDatumDto;
    const dateSincDate = new Date(dateSinc);
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
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
