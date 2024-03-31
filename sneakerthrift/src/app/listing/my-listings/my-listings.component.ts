import { Component } from '@angular/core';
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

  constructor(private api: ApiService, private userService: UserService) { }

  get isLoggedIn() : boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    if(this.userId){
      this.api.getMyListings(this.userId).subscribe(listings => {
        console.log(this.userId)
        this.listings = listings;
        this.isLoading= false;
      })
    }
  }

  // isSubscribed(listing:Listing){
  //   const isSubscribedUser = listing.subscribers.find((s)=> {

  //     return s===this.userService.user?._id;
  //   });

  //   return !!isSubscribedUser;
  // }
}

