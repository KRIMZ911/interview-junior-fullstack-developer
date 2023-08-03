import { Injectable } from '@nestjs/common';
import { City } from './city.model'; 

@Injectable()
export class CitiesService {
  private readonly cities: City[] = require('../cities.json');

  searchCities(searchTerm: string): City[] {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return this.cities.filter(city => city.cityName.toLowerCase().includes(lowercaseSearchTerm));
  }
}
