import { Module } from '@nestjs/common';
import { MercadopagoController } from './mercadopago.controller';
import { MercadopagoService } from './mercadopago.service';

@Module({
  controllers: [MercadopagoController],
  providers: [MercadopagoService],
})
export class MercadopagoModule {}
