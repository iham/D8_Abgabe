import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/product/list/list.component';
import { ItemComponent } from './components/product/item/item.component';
import { DetailComponent } from './components/product/detail/detail.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from "@angular/common/http";
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
