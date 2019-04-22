import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './core/http/httpconfig.interceptor';

import { AppComponent } from './app.component';
import { PrimeComponentModule } from './prime-component/prime-component.module';
import { UiModule } from './ui/ui.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { MessageService, ConfirmationService } from 'primeng/api';
import { StudentModule } from './student/student.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimeComponentModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    LoginModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    StudentModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
