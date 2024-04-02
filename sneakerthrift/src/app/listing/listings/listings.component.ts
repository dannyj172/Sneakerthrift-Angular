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
  selectModel: string = 'newest';

  constructor(private api: ApiService, private userService: UserService) { }

  get isLoggedIn() : boolean {
    return this.userService.isLogged;
  }

  get userId():string{
    return this.userService.user?._id || ''
  }

  selectionChange(){
    switch(this.selectModel) {
      case 'newest':
        this.api.getListings().subscribe(listings => {
          this.listings = listings.sort((listingOne, listingTwo) => parseFloat(listingTwo._createdOn) - parseFloat(listingOne._createdOn));
          this.isLoading= false;
        })
        break;
    case 'oldest':
        this.api.getListings().subscribe(listings => {
          this.listings = listings.sort((listingOne, listingTwo) => parseFloat(listingOne._createdOn) - parseFloat(listingTwo._createdOn));
          this.isLoading= false;
        })
        break;
    case 'price up':
        this.api.getListings().subscribe(listings => {
          this.listings = listings.sort((listingOne, listingTwo) => parseFloat(listingOne.listingPrice) - parseFloat(listingTwo.listingPrice));
          this.isLoading= false;
        })
        break;
    case 'price down':
        this.api.getListings().subscribe(listings => {
          this.listings = listings.sort((listingOne, listingTwo) => parseFloat(listingTwo.listingPrice) - parseFloat(listingOne.listingPrice));
          this.isLoading= false;
        })
        break;
      }
    }


  ngOnInit(): void {
    this.api.getListings().subscribe(listings => {
      this.listings = listings.sort((listingOne, listingTwo) => parseFloat(listingTwo._createdOn) - parseFloat(listingOne._createdOn));
      this.isLoading= false;
    })
  }
  
}

