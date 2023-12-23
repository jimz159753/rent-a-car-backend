import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleDocument = HydratedDocument<Vehicle>;

@Schema()
export class Vehicle {
    @Prop({ required: true })
    brand: string;

    @Prop({ required: true })
    model: string;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    timestamp: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
