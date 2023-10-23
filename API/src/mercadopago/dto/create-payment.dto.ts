import { IsString, IsNumber, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty({ message: 'The "id" field is required' })
  @IsString({ message: 'The "id" field must be a string' })
  @IsMongoId({ message: 'The "id" field must be a MongoId' })
  productId: string;

  @IsNotEmpty({ message: 'The "title" field is required' })
  @IsString({ message: 'The "title" field must be a string' })
  title: string;

  @IsNotEmpty({ message: 'The "unit_price" field is required' })
  @IsNumber({}, { message: 'The "unit_price" field must be a number' })
  unit_price: number;

  @IsNotEmpty({ message: 'The "userId" field is required' })
  @IsString({ message: 'The "userId" field must be a string' })
  @IsMongoId({ message: 'The "userId" field must be a MongoId' })
  userId: string;
}
