import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CurrentListingComponent } from './current-listing/current-listing.component';
import { ListingsComponent } from './listings/listings.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { ListingRoutingModule } from './listing-routing.module';

@NgModule({
  declarations: [
    CurrentListingComponent,
    ListingsComponent,
    AddListingComponent,
  ],
  imports: [CommonModule, ListingRoutingModule, SharedModule, FormsModule],
})
export class ListingModule {}