import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request as RequestType } from 'express'
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                JwtStrategy.extractJWT,
                ExtractJwt.fromAuthHeaderAsBearerToken()
            ]),
            ignoreExpiration: false,
            secretOrKey: process.env.AUTH_SECRET,
        });
    }

    async validate(payload: any) {
        return { id: payload.id, name: payload.name };
    }

    private static extractJWT(req: RequestType): string | null {
        if (req.cookies && 'user_token' in req.cookies && req.cookies.user_token.length > 0) {
            return req.cookies.user_token
        }
        return null
    }
}