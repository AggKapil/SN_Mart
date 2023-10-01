import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';
import { Cart } from 'src/app/shared/common.model';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent {
products: Product[]=[];
isShowProduct: boolean= false;
filterProduct: Product[]=[];

constructor(private ps: ProductService,private route: Router,private cs: CartService){
  this.getProduct();
  this.isShowProduct = this.route.url.includes('product/show');
this.filterProduct = this.products;
}

getProduct(){
  this.products = this.ps.getProduct();
}

addToCart(product:Product){
  //mapping a product in cart item
  const cart: Cart = {
    id:product.id,
    name: product.name,
    unit:product.unit,
    price:product.price,
    quantity: 1,
    total:product.price
  };
  //adding a product in the cart list
  
this.cs.addToCart(cart);
}

searchProduct(event:any){
  console.log(event.target.value);
this.filterProduct = this.products.filter((product: Product) => product.name.includes(event.target.value) );
}
}
