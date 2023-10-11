import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountAuthService } from 'src/app/shared/account-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  repeatPass : string= 'none';
  displayMsg: string = '';
  isAccountCreated: boolean= false; 

  constructor(private authService : AccountAuthService){}

  ngOnInit(): void{

  }
  registerForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    gender: new FormControl('',Validators.required),
    pwd: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    rpwd: new FormControl('')
  });

  registerSubmitted(){
    if(this.Pwd.value == this.Rpwd.value)
    {
      console.log(this.registerForm.valid);
      console.log("Submitted");
      this.repeatPass = 'none';

      this.authService.registerUser(this.registerForm.value
        // [ this.registerForm.value.firstname,
        // this.registerForm.value.lastname,
        // this.registerForm.value.email,
        // this.registerForm.value.mobile,
        // this.registerForm.value.gender,
        // this.registerForm.value.pwd,]
        ).subscribe(res => {
        if(res == 'Success')
        {
          this.displayMsg = 'Account created successfully';
          this.isAccountCreated = true;
        }
        else if(res == 'Already Exist')
        {
          this.displayMsg = 'Account already exists. Try another email.';
          this.isAccountCreated = false;
        }
        else{
          this.displayMsg = 'Something went wrong';
          this.isAccountCreated = false;
        }
        });
    }
    else
    {
      this.repeatPass = 'inline';
    }
  }

  get FirstName(): FormControl{
    return this.registerForm.get('firstname') as FormControl;
  }

  get LastName():FormControl{
    return this.registerForm.get('lastname') as FormControl;
  }

  get Email():FormControl{
    return this.registerForm.get('email') as FormControl;
  }

  get Mobile(): FormControl{
    return this.registerForm.get('mobile') as FormControl;
  }

  get Gender(): FormControl{
    return this.registerForm.get('gender') as FormControl;
  }

  get Pwd(): FormControl{
    return this.registerForm.get('pwd') as FormControl;
  }

  get Rpwd(): FormControl{
    return this.registerForm.get('rpwd') as FormControl;
  }
}
