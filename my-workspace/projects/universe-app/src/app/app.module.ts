import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WeatherModule } from 'nagcloudlab-weather'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
