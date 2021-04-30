import { SincConfig } from './entities/sinc-config.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateSincConfigDto } from './dto/create-sinc-config.dto';
import { UpdateSincConfigDto } from './dto/update-sinc-config.dto';

@EntityRepository(SincConfig)
export class SincConfigRepository extends Repository<SincConfig> {
  createSincConfig = async (sincConfigDTO: CreateSincConfigDto) => {
    return this.save(sincConfigDTO);
  };
  findAllSincConfig = async () => {
    return this.find();
  };
  findOneSincConfig = async (id: string) => {
    return this.findOneOrFail(id);
  };
  updateSincConfig = async (id: string, sincConfigDto: UpdateSincConfigDto) => {
    return this.save({ ...sincConfigDto, id: Number(id) });
  };
  removeSincConfig = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
