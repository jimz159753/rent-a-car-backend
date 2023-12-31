import { Injectable } from '@nestjs/common';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rent } from './schema/rent.schema';
import { Model } from 'mongoose';

@Injectable()
export class RentsService {
  constructor(@InjectModel(Rent.name) private rentModel: Model<Rent>) {
    Rent;
  }

  async create(createRentDto: CreateRentDto) {
    createRentDto.timestamp = new Date().toDateString();
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
