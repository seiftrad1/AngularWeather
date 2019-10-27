import { WeatherConditionPipe } from './weather-condition.pipe';

describe('WeatherConditionPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherConditionPipe();
    expect(pipe).toBeTruthy();
  });
});
