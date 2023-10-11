import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountAuthService {

  constructor(private http: HttpClient) { }

currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

jwtHelperService = new JwtHelperService();

baseServerUrl = "https://localhost:44361/api/";

  registerUser(user:any){
    return this.http.post(this.baseServerUrl + 'User/CreateUser',
     user,
      //{ FirsName : user[0],
      // LastName : user[1],
      // Email : user[2],
      // Mobile : user[3],
      // Gender : user[4],
      // Pwd : user[5] 
      //} 
    {
      responseType: 'text',
    }
    );
  }

  loginUser(login:any){
    return this.http.post(this.baseServerUrl + 'User/LoginUser',
    login,
    // {
    //   Email: login[0],
    //   Pwd : login[1]
    // }
    {responseType: 'text',});
  }

  //storing a token in local storage of a browser
  setToken(token: string){
    localStorage.setItem("access_token",token);
    this.loadCurrentUser();
  }

  loadCurrentUser(){
    const token = localStorage.getItem("access_token"); //getting a token from the local storage of a browser
    const userInfo = token!= null ? this.jwtHelperService.decodeToken(token) : null; //decoding the token values
    //console.log(userInfo);

    //fetching data from the decoded token so that the data can be accessible or used throught the application
    const data = userInfo ? {
      id : userInfo.id,
      firstname : userInfo.firstname,
      lastname : userInfo.lastname,
      email : userInfo.email,
      mobile : userInfo.mobile,
      gender : userInfo.gender
    } : null;

    this.currentUser.next(data); //now data is being stored in currentUser observable variable.
  }

  isLoggedIn() : boolean{
    return localStorage.getItem("access_token") ? true : false;
  }

  removeToken() {
    localStorage.removeItem("access_token");
  }
}
