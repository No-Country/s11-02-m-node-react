import { $Enums, Product as ProductModel } from '@prisma/client';

export class ProductEntity implements ProductModel {
  id: string;
  name: string;
  description: string;
  img: string[];
  currentOffer: number;
  userId: string;
  endDate: Date;
  tags: string[];
  status: $Enums.Status;
}
