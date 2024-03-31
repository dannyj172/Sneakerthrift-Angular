import { User } from "./user";

export interface Listing {
    _id: string;
    _ownerId: string;
    _createdOn: string;
    listingName: string;
    listingPhonenumber: number;
    listingImageUrl: string;
    listingPrice: string;
    listingDescription: string;

}

