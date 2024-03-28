import { Injectable, OnDestroy } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;

  userSubscription : Subscription;

  get isLogged(): boolean {
    console.log(this.user)
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe(user => {
      this.user = user
    })
  }

  login(email:string,password:string) {
    return this.http
    .post<UserForAuth>('http://localhost:3030/users/login',{email,password})
    .pipe(tap((user)=> this.user$$.next(user))).pipe(tap(user=> {
      localStorage.setItem('accessToken',user.accessToken)
      localStorage.setItem('email',user.email)
      localStorage.setItem('userId',user._id)
    }))
  }

  register( email:string, password:string, rePassword: string) {
  
    return this.http
    .post<UserForAuth>('http://localhost:3030/users/register',{email,password,rePassword})
    .pipe(tap((user)=> this.user$$.next(user))).pipe(tap(user=> {
      localStorage.setItem('accessToken',user.accessToken)
      localStorage.setItem('email',user.email)
      localStorage.setItem('_id',user._id)
    }))
  }

  logout() {
    return this.http
    .post('http://localhost:3030/users/logout', {})
    .pipe(
      tap(() => {
        localStorage.clear()
        this.user$$.next(undefined)
      })
      )
    // .pipe(tap(()=> this.user$$.next(undefined)))
  }

  // getProfile() {
  //   return this.http
  //   .get<UserForAuth>('/api/users/profile')
  //   .pipe(tap((user)=> this.user$$.next(user)));
  // }

  // updateProfile(username: string, email: string, tel?: string){
  //   return this.http
  //   .put<UserForAuth>('/api/users/profile', {username, email, tel})
  //   .pipe(tap(user=>this.user$$.next(user)))
  // }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}