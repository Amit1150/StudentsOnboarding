import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  tokenKey: string = "user_token";
  accessToken: string= "nagp2019";
  user$: BehaviorSubject<Token> = new BehaviorSubject(this.getToken());
  
  constructor(private router: Router) { }

  login(username:string, password: string) {
    var token : Token = {
      userName : username,
      accessToken : this.accessToken
    };
    this.user$.next(token);
    this.setToken(token);
    this.router.navigate(['student/add']);
  }

  logout() {
    this.user$.next(null);
    this.removeToken();
    this.router.navigate(['login']);
  }

  getToken() : Token {
    return JSON.parse(localStorage.getItem(this.tokenKey));
  }

  setToken(token) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  isAuthenticated() {
    let token = localStorage.getItem(this.tokenKey);
    
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }
}
