import { TransactionEntity } from '../entity/transaction.dto';

export interface createTransaction
  extends Omit<TransactionEntity, 'id' | 'createdAt'> {}
