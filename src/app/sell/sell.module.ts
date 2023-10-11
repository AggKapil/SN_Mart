import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SellComponent } from './sell/sell.component';
import { ProductModule } from '../product/product.module';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartListComponent } from './cart-list/cart-list.component';


@NgModule({
  declarations: [
    SellComponent,
    CartComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    SellRoutingModule,
    ProductModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SellModule { }
