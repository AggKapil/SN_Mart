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
        pId:'xyz1',
        pName: 'Bread',
        pCategory: 'Bun',
        pBrand: 'Amul',
        pPrice: 12,
        pQuantity: '10',
        pUnit: '900'
      },
      {
        pId:'xyz2',
        pName: 'Tond',
        pCategory: 'Amul',
        pBrand: 'Amul',
        pPrice: 12,
        pQuantity: '10',
        pUnit: '900'
      },
      {
        pId:'xyz3',
        pName: 'Kiss Me',
        pCategory: 'Chocolate',
        pBrand: 'Amul',
        pPrice: 12,
        pQuantity: '10',
        pUnit: '900'
      },
      {
        pId:'xyz4',
        pName: 'Fruity',
        pCategory: 'Cold Drink',
        pBrand: 'Amul',
        pPrice: 12,
        pQuantity: '10',
        pUnit: '900'
      },
      {
        pId:'xyz5',
        pName: 'Burger',
        pCategory: 'Food',
        pBrand: 'McDonal',
        pPrice: 250,
        pQuantity: '10',
        pUnit: '6 pcs'
      }
    ]
  }
}
