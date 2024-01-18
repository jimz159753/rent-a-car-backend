import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from './schema/vehicle.schema';
import { Model } from 'mongoose';
import * as dayjs from 'dayjs';
import { Rent } from 'src/rents/schema/rent.schema';
import { IVehicle, StatusEnum } from './entities/vehicle.interface';
import { IRent } from 'src/rents/entities/rent.interface';

@Injectable()
export class VehiclesService {
  constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
    @InjectModel(Rent.name) private rentModel: Model<Rent>) {
    Vehicle;
    Rent;
  }

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    createVehicleDto.timestamp = dayjs().format('DD-MM-YYYY');
    createVehicleDto.lastUpdate = dayjs().format('DD-MM-YYYY');
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

  async findAvailables(startDate: string, endDate: string) {
    const response: IRent[] = await this.rentModel.find({
      $or: [
        {
          startDate: { $lte: endDate },
          endDate: { $gte: startDate },
          'vehicle.status': StatusEnum.RENTED
        },

      ]
    })
    let vehicles: IVehicle[]
    if (response.length) {
      const vehicleFilterIds = response.map(el => el.vehicle._id)
      vehicles = await this.vehicleModel.find({ '_id': { $nin: vehicleFilterIds } })
    } else {
      vehicles = await this.vehicleModel.find()
    }
    return vehicles;
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    updateVehicleDto.lastUpdate = dayjs().format('DD-MM-YYYY');
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
