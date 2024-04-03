import { Component, isStandalone } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css'],
})
export class AddListingComponent {
  constructor(private apiService: ApiService,private router: Router) {

  }

  addListing(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const {listingName, listingPhonenumber,listingPrice, listingImageUrl, listingDescription} = form.value;

    this.apiService.createListing(listingName, listingPhonenumber,listingPrice, listingImageUrl, listingDescription).subscribe(()=> {
      this.router.navigate(['/listings']);
    })
  }
}
