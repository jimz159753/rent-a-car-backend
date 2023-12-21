import { IsNotEmpty, IsString } from 'class-validator';
import { IClient } from './client.interface';

export class Client implements IClient {
    @IsNotEmpty()
    @IsString()
    dni!: string;

    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsString()
    address!: string;

    @IsNotEmpty()
    @IsString()
    phone!: string;

    @IsNotEmpty()
    @IsString()
    date!: string;
}
