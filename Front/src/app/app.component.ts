import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private authService: AuthService) { }
  
  title = 'Front';
  loggedIn: boolean;

  ngOnInit(){
    this.isLoggedIn();
  }

  isLoggedIn() {
    if(this.authService.isLoggedIn) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  logout(){
    this.authService.logout();
    location.reload();
  }

}
