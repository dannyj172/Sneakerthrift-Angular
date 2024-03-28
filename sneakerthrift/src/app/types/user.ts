export interface User {

    listings: string[];
    _id: string;
    email: string;
    password: string;
    // confirmPassword: string;
    _createdOn: string;
    accessToken: string;
    // created_at: string;
    // __v: number

}

export interface UserForAuth {
    email: string;
    password: string;
    _id: string;
    accessToken: string;
}

// export interface ProfileDetails {
//     username: string;
//     email: string;
//     tel: string;
// }