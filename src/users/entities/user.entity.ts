import {
    IsEmail,
    IsNotEmpty,
    IsPhoneNumber,
    IsString,
    IsStrongPassword,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IUser } from './user.interface';

export class User implements IUser {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'Price per day',
        maxLength: 20,
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
    @IsPhoneNumber()
    @ApiProperty({
        maxLength: 30,
        example: '3314236578',
    })
    phone: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'Price per day',
        maxLength: 20,
        example: 'Av.Patria #1234, La Estancia',
    })
    address: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'Amount that client left',
        maxLength: 20,
        example: 'Admin',
    })
    role: string;

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    @ApiProperty({
        maxLength: 20,
        example: 'temporal_password',
    })
    password: string;

    @IsString()
    @IsNotEmpty()
    timestamp: string;
}
