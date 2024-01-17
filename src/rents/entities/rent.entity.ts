import { IsNotEmpty, IsString, IsObject } from 'class-validator';
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
            timestamp: new Date().toDateString(),
        },
    })
    client: IClient;

    @IsNotEmpty()
    @IsObject()
    @ApiProperty({
        maxLength: 30,
        example: {
            model: 'Sedan',
            image: 'https://unsplash.com/es/fotos/coche-shelby-negro-en-la-carretera-YApiWyp0lqo',
            brand: 'Ford',
            plate: 'GDF343',
            price: 500,
            status: 'Disponible',
            timestamp: new Date().toDateString(),
        },
    })
    vehicle: IVehicle;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 14,
    })
    days: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 1000,
    })
    payment: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 10,
        example: 3000,
    })
    total: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: '16/1/2024',
    })
    startDate: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: '16/2/2024',
    })
    endDate: string;

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

    @IsNotEmpty()
    @IsString()
    lastUpdate: string;
}
