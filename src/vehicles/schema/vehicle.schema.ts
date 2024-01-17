import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleDocument = HydratedDocument<Vehicle>;

@Schema()
export class Vehicle {
    @Prop({ required: true })
    ac: boolean;

    @Prop({ required: true })
    transmition: string;

    @Prop({ required: true })
    bags: number;

    @Prop({ required: true })
    suitcases: number;

    @Prop({ required: true })
    doors: number;

    @Prop({ required: true })
    people: number;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    plate: string;

    @Prop({ required: true })
    category: string;

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

    @Prop({ required: true })
    lastUpdate: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
