import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
const BASE_URL = "http://localhost:3000/usersdata";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  getUsers() {
    return this.http.get(BASE_URL)

  }

  registerUser(user:User) {
    return this.http.post(BASE_URL, user);
  }
  
  

  constructor(public http : HttpClient) { }
}
