import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    User;
  }

  async create(createUserDto: CreateUserDto) {
    createUserDto.timestamp = new Date().toDateString();
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
