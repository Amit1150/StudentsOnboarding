import { Injectable } from '@angular/core';
import { Token } from 'src/app/models/Token';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  passwords: string[] = ['123', 'test']
  tokenKey: string = "user_token";
  accessToken: string= "nagp2019";
  user$: BehaviorSubject<Token> = new BehaviorSubject(this.getToken());
  
  constructor() { }

  login(username:string, password: string) {
    if(this.passwords.indexOf(password) > -1) {
      var token : Token = {
        userName : username,
        accessToken : this.accessToken
      };
      this.user$.next(token);
      this.setToken(token);
      
      return true;
    }else {
      return false;
    }
  }

  logout() {
    this.user$.next(null);
    this.removeToken();
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
