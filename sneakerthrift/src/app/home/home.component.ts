import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user/user.service';
import { ApiService } from '../api.service';
import { Listing } from '../types/listing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[RouterModule,CommonModule],
  standalone:true,
})
export class HomeComponent {

  listings: Listing[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.api.getListings().subscribe(listings => {
      this.listings = listings.reverse().slice(0,3);
      this.isLoading= false;
    })
  }

  navigateToListing(listingId:any) {
    this.router.navigate([`/listings/${listingId}`])
  }

}
