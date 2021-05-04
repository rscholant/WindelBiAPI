import { SincConfig } from './entities/sinc-config.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateSincConfigDto } from './dto/create-sinc-config.dto';
import { UpdateSincConfigDto } from './dto/update-sinc-config.dto';
import { User } from 'src/users/entities/user.entity';

@EntityRepository(SincConfig)
export class SincConfigRepository extends Repository<SincConfig> {
  createSincConfig = async (sincConfigDTO: CreateSincConfigDto, user: User) => {
    const { sql, tables } = sincConfigDTO;
    return this.save({ sql, tables, user });
  };
  findAllSincConfig = async (user: User) => {
    console.log(user);
    return this.find({ where: { user }, relations: ['sincDatum'] });
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
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
