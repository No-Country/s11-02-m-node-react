import { Injectable } from '@nestjs/common';
import MercadoPago, { Payment } from 'mercadopago';

@Injectable()
export class MercadopagoService {
  private payment: Payment;

  constructor() {
    // Initialize MercadoPago client and API objects here
    const client = new MercadoPago({
      accessToken: 'access_token',
      options: { timeout: 5000, idempotencyKey: 'abc' },
    });
    this.payment = new Payment(client);
  }
  async createPayment(paymentData: any): Promise<any> {
    try {
      return this.payment.create({ body: paymentData });
    } catch (error) {
      throw { error };
    }
  }
}
