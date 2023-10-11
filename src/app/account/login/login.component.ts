import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountAuthService } from 'src/app/shared/account-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private loginAuth : AccountAuthService, private router : Router) {}
  ngOnInit(): void {
    
  }

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    pwd : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)])
  });

  isUserValid: boolean = false;
  
  loginSubmitted(){
    this.loginAuth.loginUser(this.loginForm.value)
    .subscribe(res => {
      if(res == 'Failure')
      {
        this.isUserValid = false;
        alert('Login Unsuccessful');
        this.router.navigateByUrl('/account/notfound');
      }
      else
      {
        this.isUserValid = true;
        this.loginAuth.setToken(res); //calling a method which stores a token in local storage
        this.router.navigateByUrl('/account/home');
        //alert(res);
        //alert('Login successful');
      }
      });
    console.log(this.loginForm);
  } 

  get Email(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }

  get Pwd(): FormControl{
    return this.loginForm.get('pwd') as FormControl;
  }
}

