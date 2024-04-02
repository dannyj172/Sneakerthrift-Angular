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

  getMyListings(userId:string) {
    const { apiUrl } = environment;
    return this.http.get<Listing[]>(`${apiUrl}/data/listings?where=_ownerId%3D%22${userId}%22`);
  }

  getListing(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Listing>(`${apiUrl}/data/listings/${id}`);
  }

  createListing(listingName: string, listingPhonenumber: string,listingPrice: string, listingImageUrl: string, listingDescription: string) {
    const { apiUrl } = environment;
  return this.http.post<Listing>(`${apiUrl}/data/listings`, {listingName, listingPhonenumber,listingPrice, listingImageUrl, listingDescription})
  }

  editListing(listingId: string, listingName: string, listingPhonenumber: string, listingPrice: string, listingImageUrl: string, listingDescription: string) {
    const { apiUrl } = environment;
  return this.http.put<Listing>(`${apiUrl}/data/listings/${listingId}`, {listingName, listingPhonenumber,listingPrice, listingImageUrl, listingDescription})
  }

  deleteListing(listingId: string) {
    const { apiUrl } = environment;
  return this.http.delete<Listing>(`${apiUrl}/data/listings/${listingId}`)
  }

  getAllComments(listingId: string) {
    const { apiUrl } = environment;
    const searchQuery = encodeURIComponent(`listingId="${listingId}"`)
    const relationQuery = encodeURIComponent(`author=_ownerId:users`)
    return this.http.get<Comment[]>(`${apiUrl}/data/comments?where=${searchQuery}&load=${relationQuery}`)
  }

  createComment(listingId: string, comment: string) {
    const { apiUrl } = environment;
    return this.http.post<Comment>(`${apiUrl}/data/comments`,{listingId,comment})
  }

  deleteComment(commentId: string) {
    const { apiUrl } = environment;
    return this.http.delete<Comment>(`${apiUrl}/data/comments/${commentId}`)
  }

}