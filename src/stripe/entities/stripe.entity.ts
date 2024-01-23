import { IsNotEmpty, IsString, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IClient } from 'src/clients/entities/client.interface';
import { IVehicle } from 'src/vehicles/entities/vehicle.interface';
import { IStripe } from './stripe.interface';
import * as dayjs from 'dayjs';

export class Stripe implements IStripe {
    @IsNotEmpty()
    @IsObject()
    @ApiProperty({
        maxLength: 30,
        example: {
            name: 'Luis Jimenez',
            phone: '331234566',
            address: 'Patria 1234',
            timestamp: dayjs().format('DD-MM-YYYY hh:mm a'),
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
            timestamp: dayjs().format('DD-MM-YYYY hh:mm a'),
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
