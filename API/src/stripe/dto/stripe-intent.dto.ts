import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStripeIntentDto {
  @ApiProperty({
    description: 'Amount of recharge to be made',
    nullable: false,
    minLength: 1,
    example: 12,
  })
  @IsNotEmpty({ message: 'amount is required' })
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'User id of the user making the recharge',
    nullable: false,
    minLength: 24,
    example: '64e83e47891866a96b5977c1',
  })
  @IsNotEmpty({ message: 'userId is required' })
  @IsString()
  userId: string;
}
