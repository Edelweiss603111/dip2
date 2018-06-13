import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, of} from 'rxjs';

import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  url: string = '';

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.url = state.url;

    return this.checkLogin();
  }

  checkLogin(): Observable<boolean> {
    console.log('Guard. Check if user authorized');
    this.authService.checkLogin();

    if (this.authService.checkLogin()) {
      if (new Date() < new Date(this.authService.token.expired)) {
        return of(true);
      } else {
        return this.authService.refreshToken();
      }
    }
    this.accessDenied();
    return of(false);
  }


  accessDenied() {
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = this.url;
    console.log('redirectURL: ' + this.authService.redirectUrl);

    console.log('этот козел меня редиректит к логину');
    // Navigate to the login page with extras
    this.router.navigate(['/auth/login'], {
      queryParams: {
        accessDenied: true
      }
    });
  }

}
