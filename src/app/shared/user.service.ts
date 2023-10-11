import { Injectable } from '@angular/core';
import { User } from './common.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] =[];

  constructor() { }

  addSellDetail(user:User){
    this.users.push(user);
  }

  getSellDetail(): User[]{
    return this.users;
  }
}