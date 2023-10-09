import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  //PORT
  const port = process.env.PORT;
  // Message styles
  const coloredPort = `\x1b[33m\x1b[1m${port}\x1b[0m`;
  const coloredText = `\x1b[32m\x1b[1m]> Server running on port\x1b[0m`;
  const message = `${coloredText} ${coloredPort}`;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  console.log(message);
}
bootstrap();
