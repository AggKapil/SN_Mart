import { Component, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddProductComponent } from './add-product/add-product.component'
import { ShowProductComponent } from './show-product/show-product.component'
import { ProductComponent } from './product/product.component'

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: '', component: AddProductComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'show', component: ShowProductComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
