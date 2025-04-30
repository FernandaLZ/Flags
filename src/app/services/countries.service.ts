import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Country} from '../models/country';
import {CountryInfo} from '../models/CountryInfo';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,flags,region,ccn3';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }
  getCountryByCode(code: string): Observable<CountryInfo> {
    const url = `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,region,ccn3,area,capital,languages,currencies,timezones`;
    return this.http.get<CountryInfo>(url)
  }
}
