import { Component } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent {
  products: Product[]=[];

  constructor(private ps: ProductService){
    this.getProduct();
  }
  
  getProduct(){
    this.products = this.ps.getProduct();
  }
}
