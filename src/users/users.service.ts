import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as dayjs from 'dayjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    User;
  }

  async create(createUserDto: CreateUserDto) {
    const response = new this.userModel(createUserDto);
    return await response.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    const response = await this.userModel.findById(id).exec();
    return response;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    updateUserDto.lastUpdate = dayjs().format('DD-MM-YYYY');
    const response = await this.userModel
      .updateOne({ _id: id }, { $set: updateUserDto })
      .exec();
    return response;
  }

  async remove(id: string) {
    const response = await this.userModel.deleteOne({ _id: id }).exec();
    return response;
  }
}
