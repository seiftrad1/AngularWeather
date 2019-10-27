import { Pipe, PipeTransform } from '@angular/core';
import {WeatherCategory} from '../Models/weather-category.enum';
import * as _ from 'lodash';
@Pipe({
  name: 'weatherCondition'
})
export class WeatherConditionPipe implements PipeTransform {
  transform(value: any): any {
    if (_.includes(value, 'Clear')) {
      return WeatherCategory.Sunny;
    } else if (_.includes(value, 'Rain')) {
      return WeatherCategory.Rain;
    } else if (_.includes(value, 'Clouds') ) {
      return WeatherCategory.Cloudy;
    }
    return null;
  }

}
