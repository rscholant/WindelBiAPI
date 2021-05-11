import { forwardRef, Module } from '@nestjs/common';
import { SincConfigService } from './sinc-config.service';
import { SincConfigController } from './sinc-config.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SincConfig } from './entities/sinc-config.entity';
import { SincConfigRepository } from './sinc-config.repository';
import { UsersModule } from 'src/users/users.module';
import { AppModule } from 'src/app.module';

@Module({
  imports: [
    forwardRef(() => AppModule),
    UsersModule,
    TypeOrmModule.forFeature([SincConfig, SincConfigRepository]),
  ],
  controllers: [SincConfigController],
  providers: [SincConfigService],
})
export class SincConfigModule {}
