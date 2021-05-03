import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SincConfigModule } from './sinc-config/sinc-config.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UsersModule, SincConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
