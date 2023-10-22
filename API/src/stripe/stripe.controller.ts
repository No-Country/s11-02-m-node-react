import {
  BadRequestException,
  Body,
  Controller,
  Headers,
  Post,
  Req,
} from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreateStripeIntentDto } from './dto/stripe-intent.dto';
import RequestWithRawBody from './interface/requestWithRawBody.interface';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}
  @Post('create-payment-intent')
  async generatePaymentIntent(
    @Body() createStripeIntentDto: CreateStripeIntentDto,
  ) {
    return await this.stripeService.createPaymentIntent(createStripeIntentDto);
  }
  @Post('webhook')
  async stripeWebHook(
    @Headers('stripe-signature') signature: string,
    @Req() request: RequestWithRawBody,
  ) {
    if (!signature) {
      throw new BadRequestException('Missing stripe-signature header');
    }
    await this.stripeService.stripeWebHook(signature, request.rawBody);
    return null;
  }
}
