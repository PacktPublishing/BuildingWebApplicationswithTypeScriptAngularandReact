import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component'
import { AboutComponent } from './about.component';
import { ForecastComponent } from './forecast.component';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ForecastComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
