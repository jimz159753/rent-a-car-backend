import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './schema/document.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as dayjs from 'dayjs';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(Document.name) private documentModel: Model<Document>,
  ) {
    Document;
  }

  async create(createDocumentDto: CreateDocumentDto) {
    createDocumentDto.timestamp = dayjs().format('DD-MM-YYYY hh:mm a');
    createDocumentDto.lastUpdate = dayjs().format('DD-MM-YYYY hh:mm a');
    const response = new this.documentModel(createDocumentDto);
    return await response.save();
  }

  async findAll() {
    return await this.documentModel.find().exec();
  }

  async findOne(id: string) {
    const response = await this.documentModel.findById(id).exec();
    return response;
  }

  async update(id: string, updateDocumentDto: UpdateDocumentDto) {
    updateDocumentDto.lastUpdate = dayjs().format('DD-MM-YYYY hh:mm a');
    const response = await this.documentModel
      .updateOne({ _id: id }, { $set: updateDocumentDto })
      .exec();
    return response;
  }

  async remove(id: string) {
    const response = await this.documentModel.deleteOne({ _id: id }).exec();
    return response;
  }
}
