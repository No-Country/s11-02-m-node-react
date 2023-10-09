import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { validate, isMongoId } from 'class-validator';
import { UserEntity } from './entities/user.entity';
import { encryptPassword } from '../utils/bcrypt.utils';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const errors = await validate(createUserDto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    try {
      createUserDto.password = await encryptPassword(createUserDto.password);
      const newUser = await this.prisma.user.create({
        data: createUserDto,
      });
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<UserEntity[]> {
    try {
      const users = await this.prisma.user.findMany({});
      return users;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<UserEntity> {
    try {
      if (!isMongoId(id))
        throw new BadRequestException('Id must be a mongodb id');
      const user = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      if (!user) throw new NotFoundException('user not found');
      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const errors = await validate(updateUserDto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    try {
      delete updateUserDto.password;
      const user = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      if (!user) throw new NotFoundException('user not found');
      const updateUser = this.prisma.user.update({
        where: {
          id: id,
        },
        data: updateUserDto,
      });
      return updateUser;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    try {
      if (!isMongoId(id))
        throw new BadRequestException('Id must be a mongodb id');
      const user = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      if (!user) throw new NotFoundException('user not found');
      await this.prisma.user.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
