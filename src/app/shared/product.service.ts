import { Injectable } from '@angular/core'
import { Product } from './product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = []

  constructor () {
    this.products= this.initProducts();
  }

  addProduct (product: Product) {
    this.products.push(product)
  }

  getProduct (): Product[] {
    return this.products
  }

  initProducts ():Product[] {
    return [
      {
        id:'xyz1',
        name: 'Bread',
        category: 'Bun',
        brand: 'Amul',
        price: 12,
        quantity: '10',
        unit: '900'
      },
      {
        id:'xyz2',
        name: 'Tond',
        category: 'Amul',
        brand: 'Amul',
        price: 12,
        quantity: '10',
        unit: '900'
      },
      {
        id:'xyz3',
        name: 'Kiss Me',
        category: 'Chocolate',
        brand: 'Amul',
        price: 12,
        quantity: '10',
        unit: '900'
      },
      {
        id:'xyz4',
        name: 'Fruity',
        category: 'Cold Drink',
        brand: 'Amul',
        price: 12,
        quantity: '10',
        unit: '900'
      },
      {
        id:'xyz5',
        name: 'Burger',
        category: 'Food',
        brand: 'McDonal',
        price: 250,
        quantity: '10',
        unit: '6 pcs'
      }
    ]
  }
}
