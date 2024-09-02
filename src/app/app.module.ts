import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { GoBeautyENComponent } from './components/go-beauty-en/go-beauty-en.component';
import { GoBeautyARComponent } from './components/go-beauty-ar/go-beauty-ar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    GoBeautyENComponent,
    GoBeautyARComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
