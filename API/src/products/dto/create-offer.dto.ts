import { IsString, IsNumber, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty({ message: 'The "productId" field is required' })
  @IsString({ message: 'The "productId" field must be a string' })
  @IsMongoId({ message: 'The "productId" field must be a MongoId' })
  productId: string;

  @IsNotEmpty({ message: 'The "userId" field is required' })
  @IsString({ message: 'The "userId" field must be a string' })
  @IsMongoId({ message: 'The "userId" field must be a MongoId' })
  userId: string;

  @IsNotEmpty({ message: 'The "currentOffer" field is required' })
  @IsNumber({}, { message: 'The "newOffer" field must be a number' })
  newOffer: number;
}
