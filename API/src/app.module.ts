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

@Module({
  imports: [UsersModule, ProductsModule, PrismaModule, AuthModule, CloudinaryModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, JwtService, UsersService],
})
export class AppModule {}
