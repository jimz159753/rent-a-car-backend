import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './schemas/client.schema';
import { Model } from 'mongoose';
import * as dayjs from 'dayjs';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) { }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    createClientDto.timestamp = dayjs().format('DD-MM-YYYY');
    const response = new this.clientModel(createClientDto);
    return await response.save();
  }

  async findAll(): Promise<Client[]> {
    return await this.clientModel.find().exec();
  }

  async findOne(id: string): Promise<Client> {
    const response = await this.clientModel.findById(id).exec();
    return response;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const response = await this.clientModel
      .updateOne({ _id: id }, { $set: updateClientDto })
      .exec();
    return response;
  }

  async remove(id: string) {
    const response = await this.clientModel.deleteOne({ _id: id }).exec();
    return response;
  }
}
