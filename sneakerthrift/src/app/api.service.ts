import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Listing } from './types/listing';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getListings() {
    const { apiUrl } = environment;
    return this.http.get<Listing[]>(`${apiUrl}/data/listings`);
  }

  getListing(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Listing>(`${apiUrl}/data/listings/${id}`);
  }

  createListing(listingName: string, listingPhonenumber: string,listingPrice: string, listingImageUrl: string, listingDescription: string) {
    const { apiUrl } = environment;
    console.log(listingPhonenumber)
  return this.http.post<Listing>(`${apiUrl}/data/listings`, {listingName, listingPhonenumber,listingPrice, listingImageUrl, listingDescription})
  }

  // getPosts(limit?: number) {
  //   const { apiUrl } = environment;
  //   let url = `${apiUrl}/posts`;

  //   if (limit) {
  //     url += `?limit=${limit}`;
  //   }

  //   return this.http.get<Post[]>(url);
  // }
}