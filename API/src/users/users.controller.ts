import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Patch,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

const handleErrors = (error) => {
  if (error instanceof BadRequestException) {
    throw error;
  } else if (error instanceof ConflictException) {
    throw error;
  } else if (error instanceof NotFoundException) {
    throw error;
  } else {
    console.log(error);
    throw new BadRequestException('Something bad happened', {
      cause: error,
    });
  }
};

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() createProductDto: CreateUserDto,
  ): Promise<{ newUser: UserEntity; message: string }> {
    try {
      const newUser = await this.usersService.create(createProductDto);
      return { newUser, message: 'user created successfully' };
    } catch (error) {
      throw handleErrors(error);
    }
  }

  @Get()
  async findAll(): Promise<{ users: UserEntity[]; message: string }> {
    try {
      const users = await this.usersService.findAll();
      return { users, message: 'users found successfully' };
    } catch (error) {
      throw handleErrors(error);
    }
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<{ user: UserEntity; message: string }> {
    try {
      const user = await this.usersService.findOne(id);
      return { user, message: 'user found successfully' };
    } catch (error) {
      throw handleErrors(error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<{ updateUser: UserEntity; message: string }> {
    try {
      const updateUser = await this.usersService.update(id, updateUserDto);
      return { updateUser, message: 'user update successfully' };
    } catch (error) {
      throw handleErrors(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    try {
      await this.usersService.remove(id);
      return { message: `the user id ${id} deleted` };
    } catch (error) {
      throw handleErrors(error);
    }
  }
}
