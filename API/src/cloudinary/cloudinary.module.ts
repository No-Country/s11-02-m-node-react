import { Module } from '@nestjs/common';
import { CloudinaryController } from './cloudinary.controller';
import { CloudinaryService } from './cloudinary.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryProvider } from './cloudinary.provider';

@Module({
  controllers: [CloudinaryController],
  providers: [CloudinaryService, PrismaService, CloudinaryProvider],
  exports: [CloudinaryProvider, CloudinaryService],
})
export class CloudinaryModule {}
