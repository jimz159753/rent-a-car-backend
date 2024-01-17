import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CategoryEnum, IVehicle, StatusEnum, TransmitionEnum } from './vehicle.interface';
import { ApiProperty } from '@nestjs/swagger';

export class Vehicle implements IVehicle {
    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty({
        maxLength: 20,
        example: true,
    })
    ac: boolean;

    @IsNotEmpty()
    @IsEnum(TransmitionEnum)
    @ApiProperty({
        maxLength: 20,
        example: TransmitionEnum.AUTOMATIC,
    })
    transmition: TransmitionEnum;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: '2',
    })
    bags: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: '5',
    })
    suitcases: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: '5',
    })
    doors: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: '5',
    })
    people: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: 'Compacto',
    })
    type: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: 'GYU342',
    })
    plate: string;

    @IsNotEmpty()
    @IsEnum(CategoryEnum)
    @ApiProperty({
        maxLength: 20,
        example: CategoryEnum.SEDAN,
    })
    category: CategoryEnum;

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

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: 'image.png',
    })
    image: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'Price per day',
        maxLength: 20,
        example: 200,
    })
    price: string;

    @IsNotEmpty()
    @IsEnum(StatusEnum)
    @ApiProperty({
        maxLength: 20,
        example: StatusEnum.AVAILABLE,
    })
    status: StatusEnum;

    @IsNotEmpty()
    @IsString()
    timestamp: string;

    @IsNotEmpty()
    @IsString()
    lastUpdate: string;
}
