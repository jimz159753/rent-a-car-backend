import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    birthday: string;

    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    timestamp: string;

    @Prop({ required: true })
    lastUpdate: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client).index({ email: 1 }, { unique: true });
