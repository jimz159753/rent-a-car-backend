import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IClient } from 'src/clients/entities/client.interface';
import { IVehicle } from 'src/vehicles/entities/vehicle.interface';

export type DocumentDocument = HydratedDocument<Rent>;

@Schema()
export class Rent {
    @Prop({ required: true, type: Object })
    client: IClient;

    @Prop({ required: true, type: Object })
    vehicle: IVehicle;

    @Prop({ required: true })
    days: number;

    @Prop({ required: true })
    payment: number;

    @Prop({ required: true })
    total: number;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    timestamp: string;
}

export const RentSchema = SchemaFactory.createForClass(Rent);
