import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsStrongPassword,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IUser } from './user.interface';

export class User implements IUser {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 'lejc12345',
    })
    username: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        maxLength: 30,
        example: 'luis@gmail.com',
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    @ApiProperty({
        maxLength: 20,
        example: 15,
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'Price per day',
        maxLength: 20,
        example: 'Luis Jimenez',
    })
    name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'Amount that client left',
        maxLength: 20,
        example: 'Admin',
    })
    role: string;

    @IsString()
    @IsNotEmpty()
    timestamp: string;
}
