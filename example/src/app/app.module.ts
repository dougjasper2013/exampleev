import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ProductComponent } from './component';

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [ProductComponent]
})
export class AppModule { }
