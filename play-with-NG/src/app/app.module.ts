import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CardComponent } from './card/card.component';
import { TextComponent } from './text/text.component';
import { CounterComponent } from './counter/counter.component';
import { GreetingComponent } from './greeting/greeting.component';

import { Feature1Module } from './feature1/feature1.module'

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    CardComponent,
    TextComponent,
    CounterComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Feature1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
