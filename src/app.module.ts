import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverModule } from './app/driver/driver.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PWD,
      port: Number(process.env.DB_PORT),
      synchronize: true,
      entities: [__dirname+'/**/*.entity{.js,.ts}'],
    }),
    DriverModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
