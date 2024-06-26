import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError, tap } from "rxjs";
import { environment } from "src/environments/environment.development";
import { Router } from "@angular/router";
import { ErrorService } from "./core/error/error.service";

const {apiUrl} = environment

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    API = '/users'
    constructor(private errorService: ErrorService, private router: Router) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = localStorage.getItem('accessToken');
        console.log(req)
        if(accessToken) {
            req = req.clone({
            setHeaders: {
                "X-Authorization": accessToken
            }
            })
        }
        
        if (!req.headers.has('Content-Type')) {
            req = req.clone({
              setHeaders: {
                'Content-Type': 'application/json'
              }
            });
          }

        return next.handle(req).pipe(
            catchError(err=> {
                console.log(err)
                if(err.status === 401 ) {
                    this.router.navigate(['/auth/login'])
                }else if(err.status === 403) {
                    this.router.navigateByUrl('/', { skipLocationChange: true, }).then(() => {
                        this.router.navigate(['/auth/login',{invalidCredentials: true}])});
                } else {
                    this.errorService.setError(err);
                    this.router.navigate(['/error'])
                }
                return [err];
            })
        )
    }
}

export const AppInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi:true,
    provide:HTTP_INTERCEPTORS,
}

