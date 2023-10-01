import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SellComponent } from './sell/sell.component';
import { ProductModule } from '../product/product.module';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    SellComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SellRoutingModule,
    ProductModule
  ]
})
export class SellModule { }
