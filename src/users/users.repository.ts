import { User } from './entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (userDto: CreateUserDto) => {
    return this.save(userDto);
  };
  findAllUsers = async () => {
    return this.find();
  };
  findOneUser = async (id: string) => {
    return this.findOneOrFail(id);
  };
  updateUser = async (id: string, userDto: UpdateUserDto) => {
    return this.save({ ...userDto, id: Number(id) });
  };
  removeUser = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
