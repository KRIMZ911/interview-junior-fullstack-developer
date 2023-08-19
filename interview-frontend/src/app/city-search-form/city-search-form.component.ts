import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-search-form',
  templateUrl: './city-search-form.component.html',
  styleUrls: ['./city-search-form.component.scss']
})
export class CitySearchFormComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    if (this.searchQuery) {
      // Assuming the Next.js API endpoint is running on http://localhost:3000
      const apiUrl = `http://localhost:3000/api/search?city=${this.searchQuery}`;

      this.http.get<any[]>(apiUrl).subscribe(
        (data) => {
          this.searchResults = data;
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.searchResults = [];
        }
      );
    } else {
      this.searchResults = [];
    }
  }
}
