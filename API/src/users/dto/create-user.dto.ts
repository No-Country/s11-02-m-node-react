import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'The "firstName" field is required' })
  @IsString({ message: 'The "firstName" field must be a string' })
  firstName: string;

  @IsNotEmpty({ message: 'The "lastName" field is required' })
  @IsString({ message: 'The "lastName" field must be a string' })
  lastName: string;

  @IsNotEmpty({ message: 'The "email" field is required' })
  @IsString({ message: 'The "email" field must be a string' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'The "password" field is required' })
  @IsString({ message: 'The "password" field must be a string' })
  password: string;

  @IsNotEmpty({ message: 'The "city" field is required' })
  @IsString({ message: 'The "city" field must be a string' })
  city: string;
}
