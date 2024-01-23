import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreateStripeDto } from './dto/create-stripe.dto';
import { UpdateStripeDto } from './dto/update-stripe.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('stripe')
@ApiTags('Stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Payment created successfully' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  create(@Body() createStripeDto: CreateStripeDto) {
    return this.stripeService.create(createStripeDto);
  }

  @Get()
  findAll() {
    return this.stripeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stripeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStripeDto: UpdateStripeDto) {
    return this.stripeService.update(+id, updateStripeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stripeService.remove(+id);
  }
}
