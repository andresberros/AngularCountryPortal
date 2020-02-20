import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCountryComponent } from './country/list-country/list-country.component';
import { CreateCountryComponent } from './country/create-country/create-country.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCountryComponent,
    CreateCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
