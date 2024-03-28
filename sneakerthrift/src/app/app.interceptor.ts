import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError, tap } from "rxjs";
import { environment } from "src/environments/environment.development";
import { Router } from "@angular/router";
import { ErrorService } from "./core/error/error.service";

@Injectable()

export class AppInterceptor implements HttpInterceptor {
    apiUrl = environment.apiUrl;
    constructor(private errorService: ErrorService, private router: Router) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = localStorage.getItem('accessToken');
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
                if(err.status === 401) {
                    this.router.navigate(['/auth/login'])
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

