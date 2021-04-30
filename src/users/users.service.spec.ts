import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          name: 'e2e_test',
          type: 'mariadb',
          host: 'localhost',
          port: 3307,
          username: 'root',
          password: 's2crm49y!',
          database: 'e2e_test',
          synchronize: false,
          entities: ['dist/**/*.entity.js'],
          keepConnectionAlive: true,
        }),
      ],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: UserRepository,
        },
      ],
      exports: [UsersService],
    }).compile();
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should show all users', () => {
    console.log(service.findAll());
    expect(service).toBeDefined();
  });
});
