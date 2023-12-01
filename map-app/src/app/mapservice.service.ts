import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MapserviceService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = 'http://api.worldbank.org/v2/country';
  private  data: any;
  getCountryProperties(countryName: string): Observable<any> {
    const url = `${this.apiUrl}/${countryName}?format=json`;
    this.storeCountryProperties(this.httpClient.get(url));
    return this.data;
  }
  storeCountryProperties(data : any){
    this.data = data;
  }
}
