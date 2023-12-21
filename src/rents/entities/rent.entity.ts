import { IsNotEmpty, IsNumber, IsString, IsObject } from 'class-validator';
import { IRent } from './rent.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IClient } from 'src/clients/entities/client.interface';
import { IVehicle } from 'src/vehicles/entities/vehicle.interface';

export class Rent implements IRent {
    @IsNotEmpty()
    @IsObject()
    @ApiProperty({
        maxLength: 30,
        example: {
            dni: 'INE',
            name: 'Luis Jimenez',
            phone: '331234566',
            address: 'Patria 1234',
            timestamp: '22/10/23',
        },
    })
    client: IClient;

    @IsNotEmpty()
    @IsObject()
    @ApiProperty({
        maxLength: 30,
        example: {
            name: 'SUV',
            days: 14,
            price: 200,
            timestamp: '22/10/23',
        },
    })
    vehicle: IVehicle;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        maxLength: 30,
        example: 14,
    })
    days: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        maxLength: 30,
        example: 1000,
    })
    payment: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        maxLength: 10,
        example: 3000,
    })
    total: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 100,
        example: 'This is a rent description',
    })
    description: string;

    @IsNotEmpty()
    @IsString()
    timestamp: string;
}
