import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { Cart } from 'src/app/shared/common.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartlist:Cart[]=[];

  constructor(public cs:CartService)
  {
    this.cartlist= this.cs.getCart();
  }

  calculateTotal():number{
    //reduce() this is a first order fnction in javascript
    //sum of all cartlist element's(cart) total(cart.total)
    return this.cartlist.reduce((total, cart) => {return total = total + cart.total}, 0)
  }

}
