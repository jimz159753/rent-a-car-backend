import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    role: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    timestamp: string;

    @Prop({ required: true })
    lastUpdate: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
