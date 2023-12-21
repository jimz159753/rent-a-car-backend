import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IVehicle } from './vehicle.interface';
import { IClient } from 'src/clients/entities/client.interface';
import { ApiProperty } from '@nestjs/swagger';

export class Vehicle implements IVehicle {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 'Luis Jimenez',
    })
    client: IClient['name'];

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 'SUV',
    })
    vehicle: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        maxLength: 20,
        example: 15,
    })
    days: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description: 'Price per day',
        maxLength: 20,
        example: 200,
    })
    price: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description: 'Amount that client left',
        maxLength: 20,
        example: 1000,
    })
    payment: number;
}
