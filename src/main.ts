import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ALLOWED_ENVIRONMENTS } from './common/constants/stages.constants';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const nodeEnv = process.env.NODE_ENV || 'dev';

// Check if NODE_ENV is one of the allowed values
if (!ALLOWED_ENVIRONMENTS.includes(nodeEnv)) {
  throw new Error(`Invalid NODE_ENV: ${nodeEnv}. It must be one of ${ALLOWED_ENVIRONMENTS.join(',')}`);
}

async function bootstrap() {
  dotenv.config({ path: `.env.${nodeEnv}` });

  const app = await NestFactory.create(AppModule);

  app.enableCors();


  const globalPrefix = process.env.PREFIX + (process.env.VERSION ? '/' + process.env.VERSION : '');

  app.setGlobalPrefix(globalPrefix);
  console.log('globalPrefix:', globalPrefix);
  
  app.useGlobalPipes(new ValidationPipe({whitelist: true,forbidNonWhitelisted: true,}));

  const config = new DocumentBuilder().setTitle('Social_RD')
  .setDescription('The Social_RD API')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(globalPrefix, app, document);

  const port = process.env.PORT || 3000;
  const host_api =`http://${process.env.HOST}:${port}/${globalPrefix}` || `http://${process.env.HOST}:3000`;

  await app.listen(port);
  Logger.log(`🚀 Application is running on: ${host_api}`);
}
bootstrap();
