import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { UsersModule } from './users/users.module';
import { DocumentsModule } from './documents/documents.module';
import { RentsModule } from './rents/rents.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { StripeModule } from './stripe/stripe.module';
import * as dotenv from 'dotenv';
dotenv.config();


@Module({
  imports: [
    ClientsModule,
    VehiclesModule,
    UsersModule,
    DocumentsModule,
    RentsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    AuthModule,
    MulterModule.register(),
    StripeModule.forRoot(process.env.STRIPE_KEY, { apiVersion: '2023-10-16' }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
