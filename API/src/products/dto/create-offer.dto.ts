import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty({ message: 'The "productId" field is required' })
  @IsString({ message: 'The "productId" field must be a string' })
  productId: string;

  @IsNotEmpty({ message: 'The "userId" field is required' })
  @IsString({ message: 'The "userId" field must be a string' })
  userId: string;

  @IsNotEmpty({ message: 'The "currentOffer" field is required' })
  @IsNumber()
  newOffer: number;
}
