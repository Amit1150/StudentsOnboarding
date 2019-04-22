import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { DataService } from './database/data.service';

@NgModule({
  declarations: [ ],
  imports: [
    InMemoryWebApiModule.forRoot(DataService)
  ],
  exports :[
    
  ]
})
export class CoreModule { }
