import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  public weather = null;
  public cloudu = 'cloudy' ;
  constructor(private weatherservice: WeatherService) { }
  public citynotfound = '';
  ngOnInit() {
  }
  getCity(city) {
    this.weatherservice.getWeatherByCityName(city).subscribe(data => {this.weather = data;
                                                                      this.citynotfound = ''; },
        error => {  if (error.status === 404) {this.citynotfound = 'City not Found sorry :( '; }});
        }
}


