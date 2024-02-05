import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IRent } from 'src/rents/entities/rent.interface';

export type DocumentDocument = HydratedDocument<Document>;

@Schema()
export class Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, type: Object })
    rent: IRent;

    @Prop({ required: true })
    timestamp: string;

    @Prop({ required: true })
    lastUpdate: string;
}

export const DocumentSchema = SchemaFactory.createForClass(Document);
