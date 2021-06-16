import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { DetailsComponent } from '../app/details/details.component';


@NgModule({
  declarations: [
    AppComponent,ConfirmEqualValidatorDirective, DetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }