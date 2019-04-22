import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

   /* login the user */
   login(form: NgForm ) {
    this.authentication.login(form.value.userName, form.value.password);
  }

  /* Reset the login form */
  reset(form : NgForm ) {
    form.resetForm();
  }
}
