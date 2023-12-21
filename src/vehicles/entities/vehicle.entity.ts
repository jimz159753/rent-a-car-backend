import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IVehicle } from './vehicle.interface';
import { ApiProperty } from '@nestjs/swagger';

export class Vehicle implements IVehicle {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 'SUV',
    })
    name: string;

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
    @IsString()
    timestamp: string;
}
