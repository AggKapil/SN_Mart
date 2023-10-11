import { Injectable } from '@angular/core';
import { Cart } from './common.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
carts:Cart[]=[];

  constructor() { }

  addToCart(cart:Cart){
    const tempCart = this.carts.find((cartItem: Cart) => cart.CId === cartItem.CId);
    if(tempCart){
      tempCart.cQuantity++;
      tempCart.cTotal = tempCart.cPrice * tempCart.cQuantity;
    }
    else{
    this.carts.push(cart);
    }
  }

    getCart(): Cart[]{
      return this.carts;
    }

    deleteFromCart(index:number){
      this.carts.splice(index,1);
    }
}
