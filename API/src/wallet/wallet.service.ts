import { BadRequestException, Injectable } from '@nestjs/common';
import { isMongoId } from 'class-validator';
import { PrismaService } from '../prisma/prisma.service';
import { createTransaction } from 'src/stripe/interface/createTransaction.interface';

@Injectable()
export class WalletService {
  constructor(private readonly prisma: PrismaService) {}

  async getWalletIdByUserId(userId: string): Promise<string | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        wallet: {
          select: {
            id: true,
          },
        },
      },
    });

    return user.wallet.id || null;
  }

  async getWalletByUserId(userId: string) {
    try {
      if (!isMongoId(userId))
        throw new BadRequestException('Id must be a mongodb id');

      const wallet = await this.prisma.wallet.findUnique({
        where: {
          userId,
        },
        include: {
          transactions: true,
        },
      });
      if (!wallet) throw new BadRequestException('wallet not found');
      return wallet;
    } catch (error) {
      throw error;
    }
  }

  async saveTransaction(createTransaction: createTransaction) {
    //Save transaction
    await this.prisma.transaction.create({ data: createTransaction });
    //Increase amount in user wallet
    await this.prisma.wallet.update({
      where: { id: createTransaction.walletId },
      data: {
        amount: {
          increment: createTransaction.amount,
        },
      },
    });
  }
}
