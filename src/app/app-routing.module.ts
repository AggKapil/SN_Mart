import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'product', 
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path:'sell', 
    loadChildren: () => import('./sell/sell.module').then(m => m.SellModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
