import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { IVehicle, StatusEnum } from './vehicle.interface';
import { ApiProperty } from '@nestjs/swagger';

export class Vehicle implements IVehicle {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: 'GYU342',
    })
    plate: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: 'SUV',
    })
    model: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: 'Toyota',
    })
    brand: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: './route/image',
    })
    image: string;

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
    @ApiProperty({
        maxLength: 20,
        example: StatusEnum.AVAILABLE,
        type: StatusEnum
    })
    status: StatusEnum;

    @IsNotEmpty()
    @IsString()
    timestamp: string;
}
