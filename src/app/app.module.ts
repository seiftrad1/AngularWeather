import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodayComponent } from './Componsents/today/today.component';
import { FormsModule } from '@angular/forms';
import { WeatherConditionPipe } from './Pipes/weather-condition.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    WeatherConditionPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
