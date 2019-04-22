import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../core/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

   /* login the user */
   login(form: NgForm ) {
    var islogedIn = this.authentication.login(form.value.userName, form.value.password);
    if(islogedIn) {
      this.router.navigate(['student/add']);
    }else {
      form.controls["password"].setErrors({ 'incorrect': true });
    }
  }

  /* Reset the login form */
  reset(form : NgForm ) {
    form.resetForm();
  }

  //Reset invalid password error.
  checkPassword(form: NgForm) {
    var errors = form.controls["password"].errors;
    if(errors && errors.incorrect) {
      form.controls["password"].setErrors(null);
    }
  }
}
