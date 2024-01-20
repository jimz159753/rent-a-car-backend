import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IClient } from './client.interface';
import { ApiProperty } from '@nestjs/swagger';

export class Client implements IClient {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 20,
        example: 'INE',
    })
    dni: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 'Luis Jimenez',
    })
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        maxLength: 30,
        example: 'luis@gmail.com',
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: '13-04-19992',
    })
    birthday: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 'Mexico',
    })
    country: string;

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
