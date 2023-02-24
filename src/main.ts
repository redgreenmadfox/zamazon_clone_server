import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main (main.ts)');

  const configService = app.get(ConfigService);
  const port = parseInt(configService.get('SERVER_PORT'));
  app.enableCors();
  app.setGlobalPrefix('api');

  await app.listen(port);

  logger.log(`Server running on port ${port}`);
}
bootstrap();
