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
    startDate: string;

    @Prop({ required: true })
    endDate: string;

    @Prop({ required: true })
    days: string;

    @Prop({ required: true })
    payment: string;

    @Prop({ required: true })
    total: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    timestamp: string;

    @Prop({ required: true })
    lastUpdate: string;
}

export const RentSchema = SchemaFactory.createForClass(Rent);
