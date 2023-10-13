import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { Exclude } from 'class-transformer';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @Exclude()
  sellerId?: string;
}
