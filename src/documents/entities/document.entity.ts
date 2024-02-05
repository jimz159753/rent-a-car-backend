import { IsObject, IsNotEmpty, IsString } from 'class-validator';
import { IDocument } from './document.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IRent } from 'src/rents/entities/rent.interface';
import * as dayjs from 'dayjs';

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
        example: {
            client: {
                name: 'Luis Jimenez',
                phone: '331232343',
                address: 'Trafalgar #1234',
                email: 'luis@gmail.com',
                birthday: dayjs().format('YYYY-MM-DD'),
                country: 'US',
                timestamp: dayjs().format('DD-MM-YYYY hh:mm a'),
            },
            vehicle: {
                plate: 'GYU342',
                model: 'SUV',
                brand: 'Toyota',
                image: './route/image',
                price: 200,
                status: 'available'

            },
            days: '20',
            payment: '1000',
            total: '3000',
            startDate: dayjs().format('YYYY-MM-DD'),
            endDate: dayjs().format('YYYY-MM-DD'),
            description: 'Cualquier descripcion',
            timestamp: dayjs().format('DD-MM-YYYY hh:mm a'),
            lastUpdate: dayjs().format('DD-MM-YYYY hh:mm a'),
        }
    })
    rent: IRent

    @IsNotEmpty()
    @IsString()
    timestamp: string;

    @IsNotEmpty()
    @IsString()
    lastUpdate: string;
}
