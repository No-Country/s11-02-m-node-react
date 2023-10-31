import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  ConflictException,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateOfferDto } from './dto/create-offer.dto';
import { ProductEntity } from './entities/product.entity';
import { ApiTags } from '@nestjs/swagger';

const handleErrors = (error) => {
  if (error instanceof BadRequestException) {
    // Si es una BadRequestException, devolvemos los detalles de validación
    throw error;
  } else if (error instanceof ConflictException) {
    // Si es una ConflictException, devolvemos el mensaje de conflicto
    throw error;
  } else if (error instanceof NotFoundException) {
    throw error;
  } else {
    // Para cualquier otra excepción, devolvemos un mensaje genérico
    console.log(error);
    throw new BadRequestException('Something bad happened', {
      cause: error,
    });
  }
};

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<{ product: ProductEntity; message: string }> {
    try {
      const newProduct = await this.productsService.create(createProductDto);
      return { product: newProduct, message: 'Product created successfully' };
    } catch (error) {
      handleErrors(error);
    }
  }

  @Post('create-offer')
  async createOffer(
    @Body() createOfferDto: CreateOfferDto,
  ): Promise<{ updateProduct: ProductEntity; message: string }> {
    try {
      const updateProduct =
        await this.productsService.createOffer(createOfferDto);
      return { updateProduct, message: 'Offer created successfully' };
    } catch (error) {
      handleErrors(error);
    }
  }

  @Get()
  async findAll(
    @Query('firstCategory') firstCategory: string,
    @Query('secondCategory') secondCategory: string,
    @Query('thirdCategory') thirdCategory: string,
    @Query('name') name: string,
  ): Promise<{ products: ProductEntity[]; message: string }> {
    try {
      const products = await this.productsService.findAll(
        firstCategory,
        secondCategory,
        thirdCategory,
        name,
      );
      if (products.length === 0)
        throw new BadRequestException('Products not found');
      return { products: products, message: 'Products found successfully' };
    } catch (error) {
      handleErrors(error);
    }
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<{ product: ProductEntity; message: string }> {
    try {
      const product = await this.productsService.findOne(id);
      return { product: product, message: 'Product found successfully' };
    } catch (error) {
      handleErrors(error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<{ product: ProductEntity; message: string }> {
    try {
      const updateProduct = await this.productsService.update(
        id,
        updateProductDto,
      );
      return {
        product: updateProduct,
        message: 'Product update successfully',
      };
    } catch (error) {
      handleErrors(error);
    }
  }

  @Patch('finalize-product/:id')
  async finalizeProduct(
    @Param('id') id: string,
  ): Promise<{ message: string; finishedProduct: ProductEntity }> {
    try {
      return await this.productsService.finalizeProduct(id);
    } catch (error) {
      handleErrors(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    try {
      await this.productsService.remove(id);
      return { message: `Product id ${id} deleted` };
    } catch (error) {
      handleErrors(error);
    }
  }
}
