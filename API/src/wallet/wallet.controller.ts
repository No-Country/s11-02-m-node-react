import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WalletService } from './wallet.service';

@ApiTags('wallet')
@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get(':userId')
  async getWalletByUserId(@Param('userId') userId: string) {
    try {
      return await this.walletService.getWalletByUserId(userId);
    } catch (error) {
      throw error;
    }
  }
}
