import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentListingComponent } from './current-listing/current-listing.component';
import { ListingsComponent } from './listings/listings.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { ListingRoutingModule } from './listing-routing.module';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { MyListingsComponent } from './my-listings/my-listings.component';

@NgModule({
  declarations: [
    CurrentListingComponent,
    ListingsComponent,
    AddListingComponent,
    EditListingComponent,
    MyListingsComponent,
  ],
  imports: [CommonModule, ListingRoutingModule, SharedModule, FormsModule,ReactiveFormsModule],
})
export class ListingModule {}