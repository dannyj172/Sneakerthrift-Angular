import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { ErrorService } from '../core/error/error.service';

@Injectable({ providedIn: 'root' })
export class IsLoggedInGuard implements CanActivate {
    constructor(private userService: UserService,private router: Router, private errorService: ErrorService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
        if (this.userService.isLogged) {
          this.router.navigate(["/home"])
          return false;
        }
        return true;
      }
}