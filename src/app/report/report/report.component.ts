import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/shared/cart.service';
import { Cart, User } from 'src/app/shared/common.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  userList: User[] =[];
  cartList: Cart[] =[]; //optional

  constructor(private userService: UserService, private cs:CartService,) {
    this.userList = userService.getSellDetail();
    this.cartList = cs.getCart(); //optional
  }
}
