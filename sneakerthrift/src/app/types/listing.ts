import { User } from "./user";

export interface Listing {
    _id: string;
    listingName: string;
    phoneNumber: string;
    description: string;
    userId: User;
    // __v: number
}