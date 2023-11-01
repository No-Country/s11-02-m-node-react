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
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import * as CITIES from './data/cities.json';

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

const citiesList = [];
CITIES.cities.forEach((city) => {
  citiesList.push(`${city.name}, ${city.departamento}, ${city.state}`);
});

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ newUser: UserEntity; message: string }> {
    try {
      const newUser = await this.usersService.create(createUserDto);
      return { newUser, message: 'user created successfully' };
    } catch (error) {
      throw handleErrors(error);
    }
  }

  @Get('/get-city')
  async getCity(@Query('q') query: string): Promise<any> {
    try {
      const lowercaseQuery = query.toLowerCase();
      const matchingCities = citiesList.filter((city) =>
        city.toLowerCase().includes(lowercaseQuery),
      );
      matchingCities.sort((a, b) => {
        const indexA = a.toLowerCase().indexOf(lowercaseQuery);
        const indexB = b.toLowerCase().indexOf(lowercaseQuery);

        if (indexA === 0 && indexB !== 0) {
          return -1;
        } else if (indexB === 0 && indexA !== 0) {
          return 1;
        } else {
          return a.localeCompare(b);
        }
      });
      return matchingCities;
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
