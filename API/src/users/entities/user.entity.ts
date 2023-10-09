import { User as UserModel } from '@prisma/client';
export class UserEntity implements UserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  coords: string;
  soldProducts: string[];
  purchaseProducts: string[];
  reviews: string;
  hashedAt: string;
  hashedRt: string;
}
