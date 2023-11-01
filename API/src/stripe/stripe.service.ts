import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import Stripe from 'stripe';
import { CreateStripeIntentDto } from './dto/stripe-intent.dto';
import { createTransaction } from './interface/createTransaction.interface';
import { WalletService } from 'src/wallet/wallet.service';

const stripeApiKey = process.env.STRIPE_SECRET_KEY;
const stripeCliKey = process.env.STRIPE_WEBHOOK_SECRET;
const stripe = new Stripe(stripeApiKey, {
  apiVersion: '2023-10-16',
});

const successUrl = process.env.STRIPE_SUCCESS_URL;
const cancelUrl = process.env.STRIPE_CANCEL_URL;

@Injectable()
export class StripeService {
  constructor(
    private readonly prisma: PrismaService,
    private walletService: WalletService,
  ) {}
  async createPaymentIntent(createStripeIntentDto: CreateStripeIntentDto) {
    const amountToCents = createStripeIntentDto.amount * 100;
    const existingUser = await this.prisma.user.findUnique({
      where: { id: createStripeIntentDto.userId },
    });
    if (!existingUser) {
      throw new ConflictException('User ID no found');
    }
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          quantity: 1,
          price_data: {
            product_data: {
              name: 'Recarga de billetera',
            },
            currency: 'ars',
            unit_amount: amountToCents,
          },
        },
      ],
      mode: 'payment',
      success_url: `${successUrl}`,
      cancel_url: `${cancelUrl}`,
      payment_intent_data: {
        metadata: {
          // Add metadata with info about user
          userId: createStripeIntentDto.userId,
        },
      },
    });
    return session.url;
  }
  async stripeWebHook(signature: string, payload: Buffer) {
    const stripeEvent: Stripe.Event = await stripe.webhooks.constructEventAsync(
      payload,
      signature,
      stripeCliKey,
    );
    const paymentEventData: Stripe.Event.Data = stripeEvent.data;
    console.log(paymentEventData);
    if (stripeEvent.type == 'payment_intent.succeeded') {
      const paymentEventMetadata: Stripe.PaymentIntent =
        paymentEventData.object as Stripe.PaymentIntent;
      const walletId = await this.walletService.getWalletIdByUserId(
        paymentEventMetadata.metadata.userId,
      );
      const transactionObject: createTransaction = {
        TransactionId: paymentEventMetadata.id,
        transacionType: 'RECHARGE',
        amount: paymentEventMetadata.amount / 100,
        walletId: walletId,
      };
      await this.walletService.saveTransaction(transactionObject);
      console.log(
        `El usuario de id ${transactionObject.walletId} ha recargado ${transactionObject.amount} ARS`,
      );
    }
  }
}
