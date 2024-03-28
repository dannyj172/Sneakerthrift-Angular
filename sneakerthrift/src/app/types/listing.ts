import { User } from "./user";

export interface Listing {
    _id: string;
    _ownerId: string;
    _createdOn: string;
    // title: string;
    // phonenumber: string;
    // price: string;
    // imageUrl: string;
    // description: string;
    // userId: User;

    listingName: string;
    listingPhonenumber: number;
    listingImageUrl: string;
    listingPrice: string;
    listingDescription: string;
    // _ownerId: User <-- use this one or the one on top whichever works
    // __v: number
}