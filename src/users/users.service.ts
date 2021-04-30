import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeleteResult } from 'typeorm';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.findAllUsers();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOneUser(id);
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.updateUser(id, updateUserDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    await this.userRepository.findOneUser(id);
    return this.userRepository.removeUser(id);
  }
}
