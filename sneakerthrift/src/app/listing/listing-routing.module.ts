import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../guards/auth.activate';
import { ListingsComponent } from './listings/listings.component';
import { CurrentListingComponent } from './current-listing/current-listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';

const routes: Routes = [
  {
    path: 'listings',
    children: [
      { path: '', pathMatch: 'full', component: ListingsComponent },
      { path: ':listingId', component: CurrentListingComponent },
    ],
  },
  {
    path: 'add-listing',
    component: AddListingComponent,
    // canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingRoutingModule {}