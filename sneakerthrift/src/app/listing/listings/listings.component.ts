import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Listing } from 'src/app/types/listing';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent {

  listings: Listing[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService) { }

  get isLoggedIn() : boolean {
    return this.userService.isLogged;
  }

  get userId():string{
    return this.userService.user?._id || ''
  }

  ngOnInit(): void {
    this.api.getListings().subscribe(listings => {
      this.listings = listings;
      this.isLoading= false;
    })
  }

  // isSubscribed(listing:Listing){
  //   const isSubscribedUser = listing.subscribers.find((s)=> {

  //     return s===this.userService.user?._id;
  //   });

  //   return !!isSubscribedUser;
  // }
}

