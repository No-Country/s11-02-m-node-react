import { Injectable, BadRequestException } from '@nestjs/common';
import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { validate } from 'class-validator';

@Injectable()
export class MercadopagoService {
  constructor(private readonly prisma: PrismaService) {}
  client = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
    options: { timeout: 5000, idempotencyKey: 'abc' },
  });

  async createPayment(
    createPaymentDto: CreatePaymentDto,
  ): Promise<{ link: string; message: string }> {
    try {
      const errors = await validate(createPaymentDto);
      if (errors.length > 0) throw new BadRequestException(errors);
      const preference = new Preference(this.client);

      const result = await preference.create({
        body: {
          items: [
            {
              id: createPaymentDto.productId,
              title: createPaymentDto.title,
              unit_price: createPaymentDto.unit_price,
              quantity: 1,
              currency_id: 'ARS',
              category_id: createPaymentDto.userId,
            },
          ],
          back_urls: {
            success: process.env.MERCADO_PAGO_BACK_URL,
            failure: process.env.MERCADO_PAGO_BACK_URL,
            pending: process.env.MERCADO_PAGO_BACK_URL,
          },
          notification_url: `${process.env.DEPLOY_URL}/mercadopago/webhook`,
          auto_return: 'all',
        },
      });

      return { link: result.init_point, message: 'link created successfully' };
    } catch (error) {
      throw error;
    }
  }

  async receiveWebhook(
    type: string,
    id: string,
  ): Promise<{ status: string; message: string }> {
    try {
      if (type === 'payment') {
        const payment = new Payment(this.client);
        const data = await payment.get({ id: id });
        if (data.status === 'approved') {
          const wallet = await this.prisma.wallet.findUnique({
            where: {
              userId: data.additional_info.items[0].category_id,
            },
          });
          const newAmount =
            wallet.amount + data.transaction_details.total_paid_amount;

          await this.prisma.wallet.update({
            where: {
              userId: data.additional_info.items[0].category_id,
            },
            data: {
              amount: newAmount,
            },
          });

          await this.prisma.transaction.create({
            data: {
              TransactionId: data.id.toString(),
              transacionType: 'RECHARGE',
              amount: data.transaction_details.total_paid_amount,
              walletId: wallet.id,
            },
          });
          return {
            status: data.status,
            message: 'the payment was made successfully',
          };
        } else new BadRequestException('there was an error in the payment');
      }
    } catch (error) {
      throw error;
    }
  }
}
