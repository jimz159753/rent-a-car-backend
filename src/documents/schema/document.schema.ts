import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IClient } from 'src/clients/entities/client.interface';
import { IVehicle } from 'src/vehicles/entities/vehicle.interface';

export type DocumentDocument = HydratedDocument<Document>;

@Schema()
export class Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, type: Object })
    client: IClient;

    @Prop({ required: true, type: Object })
    vehicle: IVehicle;

    @Prop({ required: true })
    timestamp: string;
}

export const DocumentSchema = SchemaFactory.createForClass(Document);
