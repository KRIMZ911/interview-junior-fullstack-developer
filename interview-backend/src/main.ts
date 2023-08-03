import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors'; // Import cors

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const corsOptions: cors.CorsOptions = { // Use cors.CorsOptions type
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  };

  app.use(cors(corsOptions)); // Use cors middleware with options

  await app.listen(3000);
}
bootstrap();