import { IsObject, IsNotEmpty, IsString } from 'class-validator';
import { IDocument } from './document.interface';
import { IClient } from 'src/clients/entities/client.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IVehicle } from 'src/vehicles/entities/vehicle.interface';

export class Document implements IDocument {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 'aval.pdf',
    })
    name: string;

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
    @IsString()
    timestamp: string;
}
