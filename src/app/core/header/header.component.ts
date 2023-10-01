import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Menu } from 'src/app/shared/common.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menus: Menu[] = [
    { name: 'Product', route: 'product' },
    { name: 'Sell', route: 'sell' },
    { name: 'Add Product', route: 'product/add' },
    // { name: 'Add Product', route: 'product/add' },
    // { name: 'Add Product', route: 'product/add' },
    { name: 'Show Product', route: 'product/show' }
  ]

  constructor (private router: Router) {}

  navigateMenu (menu: Menu) {
    console.log(menu)
    //router navigate() helps to maintain data from loosing it's state b'coz of SPA(single page application).
    this.router.navigate([menu.route])
  }
}
