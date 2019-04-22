import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { DataService } from './database/data.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './http/httpconfig.interceptor';

@NgModule({
  declarations: [ ],
  imports: [
    InMemoryWebApiModule.forRoot(DataService)
  ],
  exports :[
    
  ]
})
export class CoreModule { }
