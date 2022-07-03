import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseConnectionService } from './database/database.connection.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    AuthModule, ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({useClass: DataBaseConnectionService}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
