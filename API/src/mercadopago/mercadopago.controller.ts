import { Controller, Post, Body } from '@nestjs/common';
import { MercadopagoService } from './mercadopago.service';

@Controller('mercadopago')
export class MercadopagoController {
  constructor(private mercadopagoService: MercadopagoService) {}

  @Post()
  async createPayment(@Body() paymentData: any): Promise<any> {
    return this.mercadopagoService.createPayment(paymentData);
  }
}
