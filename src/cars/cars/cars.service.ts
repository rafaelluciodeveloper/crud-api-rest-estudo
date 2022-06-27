import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from '../car.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  async findAll(): Promise<Car[]> {
    return await this.carRepository.find();
  }

  async create(car: Car): Promise<Car> {
    return await this.carRepository.save(car);
  }

  async update(car: Car): Promise<UpdateResult> {
    return await this.carRepository.update(car.id, car);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.carRepository.delete(id);
  }
}
