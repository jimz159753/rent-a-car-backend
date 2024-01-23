import { Inject, Injectable } from '@nestjs/common';
import { CreateStripeDto } from './dto/create-stripe.dto';
import { UpdateStripeDto } from './dto/update-stripe.dto';
import Stripe from 'stripe';
import { STRIPE_CLIENT } from './constants';

@Injectable()
export class StripeService {
  constructor(@Inject(STRIPE_CLIENT) private stripe: Stripe) {

  }

  async create(createStripeDto: CreateStripeDto) {
    const { days, payment, total, startDate, endDate, description } = createStripeDto
    const client = JSON.stringify(createStripeDto.client)
    const vehicle = JSON.stringify(createStripeDto.vehicle)
    const newRent = {
      client,
      vehicle,
      days,
      payment,
      total,
      startDate,
      endDate,
      description
    }
    return await this.stripe.checkout.sessions.create({
      success_url: `${process.env.CLIENT_URL}/success`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'mxn',
            product_data: {
              name: `${createStripeDto.vehicle.brand} ${createStripeDto.vehicle.model}`,
              description: createStripeDto.vehicle.category
            },
            unit_amount: Number(createStripeDto.total)
          }
        }
      ],
      mode: 'payment',
      metadata: newRent
    });
  }

  async findAll() {
    return await this.stripe.checkout.sessions.list();
  }

  findOne(id: number) {
    return `This action returns a #${id} stripe`;
  }

  update(id: number, updateStripeDto: UpdateStripeDto) {
    return `This action updates a #${id} stripe`;
  }

  remove(id: number) {
    return `This action removes a #${id} stripe`;
  }
}
