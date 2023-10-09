import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // Add error catcher inv password and existing user
  //   const errors = await validate(createUserDto);
  //   if (errors.length > 0) {
  //     throw new BadRequestException(errors);
  //   }
  //   try {
  //     const existingUser = await this.prisma.user.findUnique({
  //       where: { email: createUserDto.email },
  //     });
  //     if (existingUser) {
  //       throw new ConflictException('Email already exist');
  //     }

  async signupLocal(dto: AuthDto): Promise<Tokens> {
    const hashedAt = await this.hashData(dto.password);
    const newUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        hashedAt,
        firstName: '',
        lastName: '',
        address: '',
        password: '',
      },
    });
    const tokens = await this.getTokens(newUser.id, newUser.email);
    await this.updateRtHash(newUser.id, tokens.refresh_token);
    return tokens;
  }

  async signinLocal(dto: AuthDto): Promise<Tokens> {
    const user = this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new ForbiddenException('Acceso denegado');

    const passwordMatches = await bcrypt.compare(
      dto.password,
      (await user).hashedAt,
    );
    if (!passwordMatches) throw new ForbiddenException('Acceso denegado');

    const tokens = await this.getTokens((await user).id, (await user).email);
    await this.updateRtHash((await user).id, tokens.refresh_token);
    return tokens;
  }

  logout() {}
  refreshTokens() {}

  async updateRtHash(userId: string, rt: string) {
    const hash = await this.hashData(rt);
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRt: hash,
      },
    });
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: string, email: string) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 15, //15 mins
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'rt-secret',
          expiresIn: 60 * 60 * 24 * 7, //1 week
        },
      ),
    ]);
    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
