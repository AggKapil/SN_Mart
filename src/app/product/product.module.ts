import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddProductComponent,
    ShowProductComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ShowProductComponent
  ]
})
export class ProductModule { }
