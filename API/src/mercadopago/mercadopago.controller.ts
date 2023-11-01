import {
  Controller,
  Post,
  Body,
  Query,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { MercadopagoService } from './mercadopago.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiTags, ApiExcludeEndpoint } from '@nestjs/swagger';

const handleErrors = (error) => {
  if (error instanceof BadRequestException) {
    throw error;
  } else if (error instanceof ConflictException) {
    throw error;
  } else if (error instanceof NotFoundException) {
    throw error;
  } else {
    console.log(error);
    throw new BadRequestException('Something bad happened', {
      cause: error,
    });
  }
};

@ApiTags('mercadopago')
@Controller('mercadopago')
export class MercadopagoController {
  constructor(private mercadopagoService: MercadopagoService) {}

  @Post()
  async createPayment(
    @Body() createPaymentDto: CreatePaymentDto,
  ): Promise<{ link: string; message: string }> {
    try {
      const response =
        await this.mercadopagoService.createPayment(createPaymentDto);
      return response;
    } catch (error) {
      handleErrors(error);
    }
  }

  @ApiExcludeEndpoint(true)
  @Post('webhook')
  async receiveWebhook(
    @Query('type') type: string,
    @Query('data.id') id: string,
  ): Promise<{ status: string; message: string }> {
    try {
      const response = await this.mercadopagoService.receiveWebhook(type, id);
      return response;
    } catch (error) {
      handleErrors(error);
    }
  }
}
