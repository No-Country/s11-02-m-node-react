import { Product, User as UserModel } from '@prisma/client';
export class UserEntity implements UserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  coords: string;
  sellingProducts?: Product[];
  soldProducts?: Product[];
  buyingProducts?: Product[];
  purchasedProducts?: Product[];
  losingProducts?: Product[];
  reviews: string;
  hashedAt: string;
  hashedRt: string;
}
