import { Module } from '@nestjs/common';
import { SincDataService } from './sinc-data.service';
import { SincDataController } from './sinc-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SincDatum } from './entities/sinc-datum.entity';
import { SincDataRepository } from './sinc-data.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([SincDatum, SincDataRepository]),
  ],
  controllers: [SincDataController],
  providers: [SincDataService],
})
export class SincDataModule {}
