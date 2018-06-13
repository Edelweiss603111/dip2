import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable, throwError} from 'rxjs';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('intercept');
    // console.log(req);

    if (!req.url.includes('/connect/')) {

      const obj = this._authService.token;

      if (obj) {
        const clonedRequest = req.clone({
          headers: req.headers.append('Authorization', `Bearer ${obj.access_token}`)
        });
        return next.handle(clonedRequest)
          .pipe(catchError((err: any) => { // <--if error use a catch
          this.checkIf401(err);
          // Other case throw an error
          return throwError(err);
        }));
      }
    }

    console.log('skip intercept');
    // return next.handle(req);
    return next.handle(req)
      .pipe(catchError((err: any) => { // <--if error use a catch
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log('неавторизован1');
        }
      }
      // Other case throw an error
      return throwError(err);
    }));
  }

  checkIf401(err: any) {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        console.log('неавторизован2');
        this._authService.logout(); // delete token from localStorage and redirect to login page
      }
    }
  }
}
