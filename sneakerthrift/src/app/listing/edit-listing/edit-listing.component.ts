import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Listing } from 'src/app/types/listing';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit{

  listingForm: FormGroup = this.fb.group({
    listingName: ['', Validators.required],
    listingPhonenumber: ['', Validators.required],
    listingPrice: ['', Validators.required],
    listingImageUrl: ['',Validators.required],
    listingDescription: ['',Validators.required]
  });
  listing: Listing = {
    _id: '',
    _ownerId: '',
    _createdOn: '',

    listingName: '',
    listingPhonenumber: 0,
    listingImageUrl: '',
    listingPrice: '',
    listingDescription: '',
  };

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

ngOnInit() {
  this.activeRoute.params.subscribe((data) => {
    const id = data['listingId'];
    this.apiService.getListing(id).subscribe((listing) => {
      this.listing = listing;
      // Call form building function after data retrieval
      this.buildForm(); 
    });
  });
}

buildForm() {
  this.listingForm = this.fb.group({
    listingName: [this.listing.listingName, Validators.required],
    listingPhonenumber: [this.listing.listingPhonenumber, Validators.required],
    listingPrice: [this.listing.listingPrice, Validators.required],
    listingImageUrl: [this.listing.listingImageUrl], // Optional validation
    listingDescription: [this.listing.listingDescription]
  });
}

editListing() {
  if (this.listingForm.invalid) {
    return;
  }

  // Access form values using value property
  const formData = this.listingForm.value;

  // Edit listing using formData
  this.apiService.editListing(
    this.listing._id,
    formData.listingName,
    formData.listingPhonenumber,
    formData.listingPrice,
    formData.listingImageUrl,
    formData.listingDescription
  ).subscribe(() => {
    this.router.navigate(['/listings']);
  });
 }

 
}