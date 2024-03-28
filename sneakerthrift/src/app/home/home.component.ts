import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports:[RouterModule]
})
export class HomeComponent {

  constructor(private userService: UserService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

}
