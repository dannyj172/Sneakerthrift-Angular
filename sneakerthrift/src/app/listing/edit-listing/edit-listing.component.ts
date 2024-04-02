import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, NgForm, Validators } from '@angular/forms';
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
    listingName: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
    listingPhonenumber: ['', [Validators.required,Validators.minLength(5)]],
    listingPrice: ['', [Validators.required,Validators.min(1)]],
    listingImageUrl: ['',[Validators.required,Validators.minLength(5)]],
    listingDescription: ['',[Validators.required,Validators.minLength(5)]]
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
    listingName: [this.listing.listingName, [Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
    listingPhonenumber: [this.listing.listingPhonenumber,[ Validators.required,Validators.minLength(5)]],
    listingPrice: [this.listing.listingPrice, [Validators.required,Validators.min(1)]],
    listingImageUrl: [this.listing.listingImageUrl,[Validators.required,Validators.minLength(5)]],
    listingDescription: [this.listing.listingDescription,[Validators.required,Validators.minLength(5)]]
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