import { Controller, Post, Body } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './city.model'; 

@Controller()
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  searchCities(@Body() body: { cityName: string }): City[] {
    const searchTerm = body.cityName;
    return this.citiesService.searchCities(searchTerm);
  }
}
