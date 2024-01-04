import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleDocument = HydratedDocument<Vehicle>;

@Schema()
export class Vehicle {
    @Prop({ required: true })
    plate: string;

    @Prop({ required: true })
    brand: string;

    @Prop({ required: true })
    model: string;

    @Prop()
    image: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    status: string;

    @Prop({ required: true })
    timestamp: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
