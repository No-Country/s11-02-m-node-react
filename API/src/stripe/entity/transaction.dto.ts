import { $Enums, Transaction as TransactionModel } from '@prisma/client';

export class TransactionEntity implements TransactionModel {
  id: string;
  TransactionId: string;
  transacionType: $Enums.TransactionType;
  amount: number;
  createdAt: Date;
  walletId: string;
}
