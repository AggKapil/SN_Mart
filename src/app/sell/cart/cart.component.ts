import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/shared/cart.service';
import { Cart, User } from 'src/app/shared/common.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartlist:Cart[]=[];

  constructor(public cs:CartService, private userService: UserService)
  {
    this.cartlist= this.cs.getCart();
  }

  ngOnInit(): void {
    
  }

  calculateTotal():number{
    //reduce() this is a first order function in javascript
    //sum of all cartlist element's(cart) total(cart.total)
    return this.cartlist.reduce((total, cart) => {return total = total + cart.cTotal}, 0)
  }

  paymentMethods = [
    'Cash',
    'Online',
    'Due'
  ];

  userForm: FormGroup = new FormGroup({
    user: new FormControl('',[Validators.required]),
    paymentMode: new FormControl('')
    // paid: new FormControl(''),
  });

  orderPlaced() {
    if(this.userForm.valid){
      console.log("Sell button triggered");
      // alert("Buy button triggered");
      console.log('hello',this.userForm.value);

      this.cartlist= this.cs.getCart();
      console.log('Cart List',this.cartlist);

      const userA: User = {
        billNo: this.autoGenerateBillNumber(),
        date: new Date(),
        user: this.userForm.value.user,
        paymentMode: this.userForm.value.paymentMode,
        orderHistory: this.cs.getCart(),
        totalAmount: this.calculateTotal()
      }
      this.userService.addSellDetail(userA);
    }
    else{
      console.error('Owner name is required',this.userForm.controls['user'].valid)
    }
  }

  autoGenerateBillNumber(){
    const date: Date = new Date();
    console.log(date);

    const bill: string = date.getDay() + '@' + date.getMonth() + '#' + date.getFullYear() + '%' + date.getHours()
                         + '$' + date.getMinutes() + '&' + date.getSeconds();
                         
    return bill;                      
  }

  cartOrderHistory(){
    this.cartlist= this.cs.getCart();
    console.log('Cart List',this.cartlist);
   }
}
