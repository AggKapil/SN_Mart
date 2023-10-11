import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { Menu } from 'src/app/shared/common.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  menus: Menu[] = [
    { name: 'Product', route: 'product' },
    { name: 'Add Product', route: 'product/add' },
    { name: 'Show Product', route: 'product/show' },
    { name: 'Sell', route: 'sell/cart-list' },
    // { name: 'Cart', route: 'sell/cart' },
    { name: 'Invoice', route: 'report' }
    // { name: 'Cart', route: 'sell/cart' }
  ]

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  constructor (private router: Router) {}

  ngOnInit(): void {
    
  }
  navigateMenu (menu: Menu) {
    console.log(menu)
    //router navigate() helps to maintain data from loosing it's state b'coz of SPA(single page application).
    this.router.navigate([menu.route])
  }

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
}
