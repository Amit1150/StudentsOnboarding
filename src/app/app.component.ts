import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isAuthenticated : boolean = false;
  userName : string = "";
  constructor(private authentication: AuthenticationService) {}

  ngOnInit(): void {
     this.authentication.user$.subscribe(data => {
        if(data != null) {
          this.userName = data.userName;
          this.isAuthenticated = true;
        }
     });
  }
}
