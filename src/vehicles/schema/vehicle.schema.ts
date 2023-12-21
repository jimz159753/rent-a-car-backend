import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleDocument = HydratedDocument<Vehicle>;

@Schema()
export class Vehicle {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    days: number;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    timestamp: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
