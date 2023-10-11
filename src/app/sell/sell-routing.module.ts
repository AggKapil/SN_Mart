import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './sell/sell.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart-list/cart-list.component';

const routes: Routes = [
  {
    path:'',
    component: SellComponent,
    children: [
      { path: '', component: CartComponent },
      { path: 'cart', component: CartComponent },
      { path: 'cart-list', component: CartListComponent },
      { path: 'sell', component: SellComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellRoutingModule { }
