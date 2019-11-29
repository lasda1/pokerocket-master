import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import {HeaderComponent} from './components/header/header.component';
import {ButtonsComponent} from './components/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonsComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
