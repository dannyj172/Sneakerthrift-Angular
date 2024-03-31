import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private userService: UserService,private router: Router) {}



  ngOnInit(): void {
    
  }
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  logout() {
    this.userService.logout().subscribe({
      next: () => {this.router.navigate(['/auth/login'])},
      error: () => {this.router.navigate(['/auth/login'])}
    })
  }
}
