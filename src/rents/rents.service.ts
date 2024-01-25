import { Injectable } from '@nestjs/common';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rent } from './schema/rent.schema';
import { Model } from 'mongoose';
import * as dayjs from 'dayjs';
import { IRent } from './entities/rent.interface';

@Injectable()
export class RentsService {
  constructor(@InjectModel(Rent.name) private rentModel: Model<Rent>) {
    Rent;
  }

  async create(createRentDto: CreateRentDto) {
    createRentDto.timestamp = dayjs().format('DD-MM-YYYY hh:mm a');
    createRentDto.lastUpdate = dayjs().format('DD-MM-YYYY hh:mm a');

    const vehiclesRented: IRent[] = await this.rentModel.find({
      startDate: { $lte: createRentDto.endDate },
      endDate: { $gte: createRentDto.startDate }
    })

    if (vehiclesRented.length) {
      const isRented = vehiclesRented.some(el => el.vehicle.plate === createRentDto.vehicle.plate)
      if (isRented) {
        return { status: 404, message: 'El vehículo ya esta rentado' }
      } else {
        const response = new this.rentModel(createRentDto);
        return await response.save();
      }
    }
    const response = new this.rentModel(createRentDto);
    return await response.save();

  }

  async findAll() {
    return await this.rentModel.find().exec();
  }

  async findOne(id: string) {
    const response = await this.rentModel.findById(id).exec();
    return response;
  }

  async update(id: string, updateRentDto: UpdateRentDto) {
    updateRentDto.lastUpdate = dayjs().format('DD-MM-YYYY hh:mm a');
    const response = await this.rentModel
      .updateOne({ _id: id }, { $set: updateRentDto })
      .exec();
    return response;
  }

  async remove(id: string) {
    const response = await this.rentModel.deleteOne({ _id: id }).exec();
    return response;
  }
}
