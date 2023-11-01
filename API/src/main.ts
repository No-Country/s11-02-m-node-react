import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import rawBodyMiddleware from './middleware/rawBody.middleware';

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
  // Raw body for stripe web hook
  app.use(rawBodyMiddleware());
  //swagger
  const configSwagger = new DocumentBuilder()
    .setTitle('Bienvenido/a a la API de Eco Subasta')
    .setDescription('Las rutas disponibles: ')
    .setVersion('1.0')
    .addTag('Eco Subasta')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('docs', app, document);
  await app.listen(port);
  console.log(message);
}
bootstrap();
