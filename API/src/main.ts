import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  //PORT
  const port = process.env.PORT;
  // Message styles
  const coloredPort = `\x1b[33m\x1b[1m${port}\x1b[0m`;
  const coloredText = `\x1b[32m\x1b[1m]> Server running on port\x1b[0m`;
  const message = `${coloredText} ${coloredPort}`;
  app.useGlobalPipes(new ValidationPipe());
  //swagger
  const configSwagger = new DocumentBuilder()
    .setTitle('ReutilizApp API')
    .setDescription('The ReutilizApp API description')
    .setVersion('1.0')
    .addTag('ReutilizApp')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
  console.log(message);
}
bootstrap();
