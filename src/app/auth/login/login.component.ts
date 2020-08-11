import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  loginTitle: string;
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  ngOnInit() {
    this.loginTitle = (this.authService.isLoggedIn ? 'Logout' : 'Login');
  }

  setMessage() {
    this.message = (!this.authService.isLoggedIn ? 'Please click on login button for login' : 'Please click on logout button for out');
  }
 
  login() {
    this.message = 'Trying to log in ...';
 
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/admin';
 
        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
    });
  }
 
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}


