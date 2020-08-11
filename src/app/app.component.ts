import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABC Retail Banking';
  constructor(public authService: AuthService){

    console.log(this.authService.isLoggedIn);
  }



}
