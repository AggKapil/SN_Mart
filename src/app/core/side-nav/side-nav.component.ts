import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, SideBarMenu } from 'src/app/shared/common.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
@Input() sideNavStatus: boolean = false;

list: SideBarMenu[] = [
  { numberId: 1, name:'Home', icon:'fa-solid fa-house', route: 'product' },
  { numberId: 2, name: 'Product', icon: 'fa-solid fa-box', route: 'product' },
  { numberId: 3, name: 'Add Product', icon: 'fa-solid fa-boxes-stacked', route: 'product/add' },
  { numberId: 4, name: 'Show Product', icon: 'fa-solid fa-boxes-stacked', route: 'product/show' },
  { numberId: 5, name: 'Sell', icon: 'fa-solid fa-check-double', route: 'sell/cart' },
  { numberId: 6, name: 'Invoice', icon: 'fa-solid fa-file-invoice', route: 'report' },
  { numberId: 7, name: 'Cart', icon: 'fa-solid fa-cart-arrow-down', route: '/sell/cart-list' }
]

constructor (private router: Router) {}

ngOnInit(): void {
  
}

navigateMenu (list: SideBarMenu) {
  console.log(list)
  //router navigate() helps to maintain data from loosing it's state b'coz of SPA(single page application).
  this.router.navigate([list.route])
}
}
