import {Inject, Injectable, Optional} from '@angular/core';

import {Observable, of} from 'rxjs';
import {catchError, filter, map} from 'rxjs/operators';

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {TokenParams} from '../../shared/models/token-params.model';

import {AccountClient, API_BASE_URL} from '../../../../api';

import {Router} from '@angular/router';
import {InstallationService} from '../installation.service';
import {UserService} from '../user.service';

@Injectable()
export class AuthService {
  constructor(private _router: Router,
              private _http: HttpClient,
              private _AC: AccountClient,
              private _installationService: InstallationService,
              private _userService: UserService,
              @Optional() @Inject(API_BASE_URL) protected  baseUrl?: string) {
  }

  public redirectUrl = '';
  public rememberMe: boolean = null;

  private _tokenAPI = '/connect/token';
  private _client_id = 'Jade.Api';

  headersForTokenAPI = new HttpHeaders({
    'content-type': 'application/x-www-form-urlencoded'
  });

  login(username: string, password: string, rememberMe: boolean): Observable<boolean> {
    console.log('doLogin in auth.service');
    const data = `client_id=${this._client_id}&grant_type=password&username=${username}&password=${password}`;

    return this._http.post(this.baseUrl + this._tokenAPI, data, {headers: this.headersForTokenAPI})
      .pipe(map(res => <TokenParams>res),

        filter(res => !!res),

        map(res => {
          const token = res && res.access_token;

          if (token) {

            if (rememberMe) {
              this.rememberMe = true;
            }

            this.token = res;

            this._userService.getCurrentUsedData();
            return true;
          } else {
            return false;
          }
        }),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 400) {
          }
          return of(false);
        }));

  }

  logout(): void {
    // this._AC.logout().subscribe(x => console.log(x));

    // Navigate to the login page with extras
    this._router.navigate(['/auth/login']);


    this.clearStorage();

    this._userService.destroyCurrentUser();

    this.rememberMe = null;
  }

  checkLogin(): boolean {
    return !!this.token;
  }


  refreshToken(): Observable<boolean> {
    console.log('RefreshToken in auth.service');

    const data = `client_id=${this._client_id}&grant_type=refresh_token&refresh_token=${this.token.refresh_token}`;
    // this.clearStorage();


    return this._http.post(this.baseUrl + this._tokenAPI, data, {headers: this.headersForTokenAPI})
      .pipe(
        map(res => {
          console.log('1');
          return <TokenParams>res;
        }),

        filter(res => !!res),

        map(res => {
          console.log('I have token!!! 2:');
          console.log(res);

          const token = res && res.access_token;

          if (token) {
            this.token = res;
            return true;
          } else {
            return false;
          }
        }),

        catchError((err: HttpErrorResponse) => {
          console.log('3');
          console.error(err);
          if (err.status === 400) {
            console.log('the request for token refreshing has been rejected');
            this.clearStorage();
          }
          return of(false);
        })
      );
  }


  get token(): any {
    if (sessionStorage.getItem('currentUser')) {
      return JSON.parse(sessionStorage.getItem('currentUser'));
    }
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  set token(token: any) {
    token.expired = new Date(new Date().setHours(new Date().getHours() + (token.expires_in / 60) / 60));
    console.log('set token:');
    console.log(token);

    if ((this.rememberMe) || (localStorage.getItem('currentUser'))) {
      localStorage.setItem('currentUser', JSON.stringify(token));
    } else {
      sessionStorage.setItem('currentUser', JSON.stringify(token));
    }
  }

  clearStorage() {
    console.log('clearing storage');

    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');
  }

  getID() {
    return this._decodeJwt().payload.sub;
  }

  private _decodeJwt() {
    const token = this.token.access_token;
    const segments = token.split('.');

    if (segments.length !== 3) {
      throw new Error('Not enough or too many segments for decoding token');
    }

    // All segment should be base64
    const headerSeg = segments[0];
    const payloadSeg = segments[1];
    const signatureSeg = segments[2];

    // base64 decode and parse JSON => btoa() , atob()
    const header = JSON.parse(atob(headerSeg));
    const payload = JSON.parse(atob(payloadSeg));

    return {
      header: header,
      payload: payload,
      signature: signatureSeg
    };
  }

}
