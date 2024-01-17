import { IsNotEmpty, IsString } from 'class-validator';
import { IClient } from './client.interface';
import { ApiProperty } from '@nestjs/swagger';

export class Client implements IClient {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: 'INE',
    })
    dni!: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 'Luis Jimenez',
    })
    name!: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 'Patria 1234',
    })
    address!: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 10,
        example: '33123456778',
    })
    phone!: string;

    @IsNotEmpty()
    @IsString()
    timestamp: string;

    @IsNotEmpty()
    @IsString()
    lastUpdate: string;
}
