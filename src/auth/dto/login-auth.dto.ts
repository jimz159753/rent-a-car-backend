import { IsEmail, IsStrongPassword, MaxLength, MinLength } from "class-validator"

export class LoginAuthDto {
    @IsEmail()
    email: string

    @IsStrongPassword()
    @MinLength(4)
    @MaxLength(12)
    password: string
}