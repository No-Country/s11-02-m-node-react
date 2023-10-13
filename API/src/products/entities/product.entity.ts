import { $Enums, Product as ProductModel } from '@prisma/client';

export class ProductEntity implements ProductModel {
  id: string;
  name: string;
  description: string;
  img: string[];
  currentOffer: number | undefined;
  currentBuyerId: string | undefined;
  purchasedById: string | undefined;
  sellerId: string;
  soldById: string | undefined;
  pastBuyersIds: string | undefined;
  endDate: Date;
  tags: string[];
  status: $Enums.Status;
}
