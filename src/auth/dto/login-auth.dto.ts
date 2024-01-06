import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator"

export class LoginAuthDto {
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
        example: 'temporal_password',
    })
    password: string;
}