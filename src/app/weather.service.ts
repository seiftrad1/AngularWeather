import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })};
  url = environment.END_POINT_API;
  apiKey = '278b16d3dcd46c4509f46a28b8efd9f7';
  constructor(private http: HttpClient) { }
  private weatherUrl = 'http://localhost:8080/';

  getWeatherByCityName(city: string) {
    const params = new HttpParams()
      .set('q', city).set('units', 'imperial')
      .set('appid', this.apiKey);
    return this.http.get(this.url, { params });
  }

}
