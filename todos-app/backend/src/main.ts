import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

dotenv.config();

async function server() {
  const port: number = 3001;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(cookieParser());

  app.enableCors({
    origin: 'http://localhost:3000', 
    credentials: true,             
  });

  await app.listen(port);
  console.log(`server is running at: http://localhost:${port}`);
}
server();
