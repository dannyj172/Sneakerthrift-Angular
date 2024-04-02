import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit{
  isAuthenticating = true;
  userId=localStorage.getItem('userId')
  constructor (private userService: UserService){}

  ngOnInit(): void {

    setTimeout(() => {
      
      this.userService.getUser().subscribe({
        next: ()=> {
          this.isAuthenticating=false;
        },
        error: ()=> {
          this.isAuthenticating=false;
        },
        complete: ()=> {
          this.isAuthenticating=false;
        },
      })
    }, 500);
}
  }
