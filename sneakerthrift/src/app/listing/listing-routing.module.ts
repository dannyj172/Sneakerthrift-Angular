import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../guards/auth.activate';
import { ListingsComponent } from './listings/listings.component';
import { CurrentListingComponent } from './current-listing/current-listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { MyListingsComponent } from './my-listings/my-listings.component';

const routes: Routes = [
  {
    path: 'listings',
    children: [
      { path: '', pathMatch: 'full', component: ListingsComponent },
      { path: ':listingId', component: CurrentListingComponent },
      { path: ':listingId/edit', component: EditListingComponent },
    ],
  },
  {
    path: 'add-listing',
    component: AddListingComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'my-listings',
    component: MyListingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingRoutingModule {}