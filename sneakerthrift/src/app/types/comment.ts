export interface Comment {
    _id: string;
    _ownerId: string;
    _createdOn: string;
    comment: string;
    listingId: string;
    author: {
        email: string;
    };
}