import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalProductComponent } from './cal-product/cal-product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { Com1Component } from './com1/com1.component';

@NgModule({
  declarations: [
    AppComponent,
    CalProductComponent,
    ProductCartComponent,
    Com1Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
