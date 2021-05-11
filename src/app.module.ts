import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SincConfigModule } from './sinc-config/sinc-config.module';
import { AuthModule } from './auth/auth.module';
import { SincDataModule } from './sinc-data/sinc-data.module';
import { AppGateway } from './app.gateway';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot(),
    AuthModule,
    UsersModule,
    SincConfigModule,
    SincDataModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
  exports: [AppGateway],
})
export class AppModule {}
