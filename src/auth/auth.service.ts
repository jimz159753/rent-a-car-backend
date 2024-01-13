import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hash, compare } from 'bcrypt'
import { User, UserDocument } from 'src/users/schema/user.schema';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UpdatePasswordAuthDto } from './dto/update-password-auth.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>,
        private jwtService: JwtService
    ) { }

    async register(registerAuthDto: RegisterAuthDto) {
        const { password } = registerAuthDto
        registerAuthDto.timestamp = new Date().toDateString();
        const plainToHash = await hash(password, 10)

        const newUser = { ...registerAuthDto, password: plainToHash }
        return await this.userModel.create(newUser)
    }

    async login(loginAuthDto: LoginAuthDto) {
        const { email, password } = loginAuthDto
        const findUser = await this.userModel.findOne({ email })
        if (!findUser) throw new HttpException('USER_NOT_FOUND', 404)

        const checkPassword = await compare(password, findUser.password)

        if (!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403)

        const payload = { id: findUser.id, name: findUser.name }
        const token = this.jwtService.sign(payload)

        const data = {
            user: findUser,
            token
        }

        return data
    }

    async updatePassword(id, updatePasswordAuthDto: UpdatePasswordAuthDto) {
        const { password } = updatePasswordAuthDto
        const plainToHash = await hash(password, 10)

        const newUser = { ...updatePasswordAuthDto, password: plainToHash }
        return await this.userModel.updateOne({ _id: id }, { $set: newUser })
            .exec();
    }

    async logoutUser() {
        return
    }
}
