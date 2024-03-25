export interface User {

    listings: string[];
    _id: string;
    email: string;
    username: string;
    password: string;
    // created_at: string;
    // __v: number

}

export interface UserForAuth {
    username: string;
    email: string;
    password: string;
    id: string;
}

// export interface ProfileDetails {
//     username: string;
//     email: string;
//     tel: string;
// }