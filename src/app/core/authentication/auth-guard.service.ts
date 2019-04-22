import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authentication: AuthenticationService,
    private router: Router) { }

  canActivate(): boolean | Promise<boolean> {
    if (this.authentication.isAuthenticated()) {
      return true;
    } else {
      console.error("User is not authenticated.");
      this.redirectToLoginPage();
      return false;
    }
  }

  redirectToLoginPage() {
    this.router.navigate(['/login']);
  }
}
