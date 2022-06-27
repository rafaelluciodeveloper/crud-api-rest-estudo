import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Car } from '../car.entity';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  index(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Post('create')
  async create(@Body() carData: Car): Promise<any> {
    return this.carsService.create(carData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() carData: Car): Promise<any> {
    carData.id = Number(id);
    return this.carsService.update(carData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.carsService.delete(id);
  }
}
