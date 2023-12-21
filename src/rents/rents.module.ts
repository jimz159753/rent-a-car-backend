import { Module } from '@nestjs/common';
import { RentsService } from './rents.service';
import { RentsController } from './rents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rent, RentSchema } from './schema/rent.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rent.name, schema: RentSchema }]),
  ],
  controllers: [RentsController],
  providers: [RentsService],
})
export class RentsModule { }
