import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Listing } from 'src/app/types/listing';

@Component({
  selector: 'app-current-listing',
  templateUrl: './current-listing.component.html',
  styleUrls: ['./current-listing.component.css']
})
export class CurrentListingComponent {
  listing = {} as Listing;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data)=> {
      const id = data['listingId'];

      
      this.apiService.getListing(id).subscribe((listing)=> {
        console.log(listing)
        this.listing = listing;
      })
    })
  }
}
