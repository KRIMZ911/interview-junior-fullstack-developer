import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

@Module({
  imports: [],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class AppModule {}
