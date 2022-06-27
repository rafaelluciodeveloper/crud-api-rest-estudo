import { Module } from '@nestjs/common';
import { CarsService } from './cars/cars.service';
import { CarsController } from './cars/cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
