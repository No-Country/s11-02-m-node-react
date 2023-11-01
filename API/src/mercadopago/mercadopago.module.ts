import { Module } from '@nestjs/common';
import { MercadopagoController } from './mercadopago.controller';
import { MercadopagoService } from './mercadopago.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MercadopagoController],
  providers: [MercadopagoService, PrismaService],
})
export class MercadopagoModule {}
