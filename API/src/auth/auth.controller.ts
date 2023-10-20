import { Body, Controller, Post } from '@nestjs/common';
import { HttpCode, UseGuards } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import { AtGuard, RtGuard } from 'src/common/guards';
import { GetCurrentUser } from 'src/common/decorators';
import { GetCurrentUserId } from 'src/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/local/signup')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(
    @Body() dto: CreateUserDto,
  ): Promise<{ tokens: Tokens; user: UserEntity }> {
    return this.authService.signupLocal(dto);
  }

  @Post('/local/signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(
    @Body() dto: AuthDto,
  ): Promise<{ tokens: Tokens; user: UserEntity }> {
    return this.authService.signinLocal(dto);
  }

  @UseGuards(AtGuard) // 'jwt' === goes strategy name
  @Post('/logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: string) {
    return this.authService.logout(userId);
  }

  @UseGuards(RtGuard) // 'jwt-refresh' === goes strategy name
  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUser('refreshToken') refreshToken: string,
    @GetCurrentUserId() userId: string,
  ) {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
