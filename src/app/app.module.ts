import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './articles/articles.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
