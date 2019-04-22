import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeComponentModule } from '../prime-component/prime-component.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    PrimeComponentModule
  ],
  exports :[
    RouterModule
  ]
})
export class LoginModule { }
