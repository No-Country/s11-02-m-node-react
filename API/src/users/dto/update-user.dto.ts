import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'The "firstName" field must be a string' })
  firstName: string;

  @IsOptional()
  @IsString({ message: 'The "lastName" field must be a string' })
  lastName: string;

  @IsOptional()
  @IsString({ message: 'The "email" field must be a string' })
  email: string;

  @IsOptional()
  @IsString({ message: 'The "address" field must be a string' })
  city: string;

  @IsOptional()
  @IsString({ message: 'The "coords" field must be a string' })
  coords: string;

  @IsOptional()
  @IsString({ message: 'The "reviews" field must be a string' })
  reviews: string;

  @IsOptional()
  @IsString({ message: 'The "hashedAt" field must be a string' })
  hashedAt: string;

  @IsOptional()
  @IsString({ message: 'The "hashedRt" field must be a string' })
  hashedRt: string;
}
