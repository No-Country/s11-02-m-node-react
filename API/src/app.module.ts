import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MercadopagoController } from './mercadopago/mercadopago.controller';
import { MercadopagoModule } from './mercadopago/mercadopago.module';
import { MercadopagoService } from './mercadopago/mercadopago.service';
import { StripeModule } from './stripe/stripe.module';
import { ConfigModule } from '@nestjs/config';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    PrismaModule,
    AuthModule,
    CloudinaryModule,
    MercadopagoModule,
    StripeModule,
    ConfigModule.forRoot(),
    WalletModule,
  ],
  controllers: [AppController, AuthController, MercadopagoController],
  providers: [
    AppService,
    AuthService,
    JwtService,
    UsersService,
    MercadopagoService,
  ],
})
export class AppModule {}
