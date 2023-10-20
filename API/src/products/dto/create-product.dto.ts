import { Status } from '@prisma/client';
import {
  IsArray,
  IsISO8601,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'The "name" field is required' })
  @IsString({ message: 'The "name" field must be a string' })
  name: string;

  @IsNotEmpty({ message: 'The "description" field is required' })
  @IsString({ message: 'The "description" field must be a string' })
  description: string;

  @IsNotEmpty({ message: 'The "img" field is required' })
  @IsArray({ message: 'The "img" field must be an array' })
  //@IsString({ message: 'The "img" field must be a string' })
  img: string[];

  // @IsNotEmpty({ message: 'The "currentOffer" field is required' })
  @IsNumber({}, { message: 'The "currentOffer" field must be a number' })
  currentOffer: number;

  // @IsNotEmpty({ message: 'The "sellerId" field is required' })
  // @IsString({ message: 'The "sellerId" field must be a string' })
  @IsMongoId()
  sellerId: string;

  @IsString({ message: 'The "endDate" field must be a string' })
  @IsISO8601({}, { message: 'The "endDate" field must be in ISO8601 format' })
  endDate: Date;

  @IsNotEmpty({ message: 'The "tags" field is required' })
  @IsArray({ message: 'The "tags" field must be an array' })
  //@IsString({ message: 'The "tags" field must be a string' })
  tags: string[];

  status: Status = Status.ACTIVE;

  //ESTOS NO PUEDO INTEGRARLOS!!!
  // currentBuyer: string;
  // purchasedBy: string;
  // seller: string;
  // soldBy: string;
  // pastBuyers: string;
  // @IsNotEmpty({ message: 'The "sellerId" field is required' })
  // @IsString({ message: 'The "sellerId" field must be a string' })
  // seller: string;
}
