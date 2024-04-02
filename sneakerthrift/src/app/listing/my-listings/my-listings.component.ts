import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Listing } from 'src/app/types/listing';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent {

  listings: Listing[] = [];
  isLoading: boolean = true;
  userId = localStorage.getItem('userId');

  constructor(private api: ApiService, private userService: UserService, private router: Router) { }

  get isLoggedIn() : boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    if(this.userId){
      this.api.getMyListings(this.userId).subscribe(listings => {
        this.listings = listings;
        this.isLoading= false;
      })
    }
  }

  navigateToListing(listingId:any) {
    this.router.navigate([`/listings/${listingId}`])
  }
}

