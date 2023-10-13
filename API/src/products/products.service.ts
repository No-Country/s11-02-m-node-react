import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from './entities/product.entity';
import { isMongoId, validate } from 'class-validator';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const errors = await validate(createProductDto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    try {
      const newProduct = await this.prisma.product.create({
        data: createProductDto,
      });
      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<ProductEntity[]> {
    try {
      const products = await this.prisma.product.findMany({});
      return products;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findOne(id: string): Promise<ProductEntity> {
    try {
      if (!isMongoId(id))
        throw new BadRequestException('Id must be a mongodb id');
      const product = await this.prisma.product.findUnique({
        where: { id: id },
      });
      if (!product) throw new NotFoundException('Product not found');
      return product;
    } catch (error) {
      throw error;
    }
  }

  async filterByCategories(
    categories: Array<string>,
  ): Promise<ProductEntity[]> {
    try {
      const filterProducts = await this.prisma.product.findMany({
        where: {
          tags: {
            hasEvery: categories,
          },
        },
      });

      if (filterProducts.length === 0)
        throw new NotFoundException('No products found for those categories');
      return filterProducts;
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    const errors = await validate(updateProductDto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    try {
      const product = await this.prisma.product.findUnique({
        where: { id: id },
      });
      if (!product) throw new NotFoundException('Product not found');
      const updateProduct = await this.prisma.product.update({
        where: { id },
        data: updateProductDto,
      });
      return updateProduct;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    try {
      if (!isMongoId(id))
        throw new BadRequestException('Id must be a mongodb id');
      const product = await this.prisma.product.findUnique({
        where: { id: id },
      });
      if (!product) throw new NotFoundException('Product not found');
      await this.prisma.product.delete({
        where: { id: id },
      });
    } catch (error) {
      throw error;
    }
  }
}
