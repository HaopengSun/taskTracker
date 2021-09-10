import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../User'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://localhost:3200/api/register'
  private _loginUrl = 'http://localhost:3200/api/login'
  public userName = localStorage.getItem("email")

  constructor(private http:HttpClient, private _router: Router) { }

  registerUser(user: User){
    localStorage.setItem('email', user.email);
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user: User){
    localStorage.setItem('email', user.email);
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    // return true or false
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    this._router.navigate(['/todo'])
  }
}
