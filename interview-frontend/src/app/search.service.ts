import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from './search';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  _url = 'http://127.0.0.1:3000/';
  constructor(private _http: HttpClient) {}
    search(cityName: Search) {
      return this._http.post<any>(this._url, cityName)
    }
}
