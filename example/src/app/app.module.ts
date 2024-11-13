import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ProductComponent } from './component';

import { FormsModule } from "@angular/forms";
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";

@NgModule({
  declarations: [
    ProductComponent,
    PaAttrDirective,
    PaModel
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
