import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from './schema/vehicle.schema';
import { Model } from 'mongoose';


@Injectable()
export class VehiclesService {
  constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>) {
    Vehicle;
  }

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    createVehicleDto.timestamp = new Date().toDateString();
    const response = new this.vehicleModel(createVehicleDto);
    return await response.save();
  }

  async findAll() {
    return await this.vehicleModel.find().exec();
  }

  async findOne(id: string) {
    const response = await this.vehicleModel.findById(id).exec();
    return response;
  }

  async findByCategory(category: string) {
    const response = await this.vehicleModel.find({ category })
    return response;
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    const response = await this.vehicleModel
      .updateOne({ _id: id }, { $set: updateVehicleDto })
      .exec();
    return response;
  }

  async remove(id: string) {
    const response = await this.vehicleModel.deleteOne({ _id: id }).exec();
    return response;
  }
}
