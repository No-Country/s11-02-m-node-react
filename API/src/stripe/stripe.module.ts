import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { StripeController } from './stripe.controller';
import { WalletService } from 'src/wallet/wallet.service';

@Module({
  controllers: [StripeController],
  providers: [StripeService, WalletService],
})
export class StripeModule {}
