import {Inject, Injectable, Optional} from '@angular/core';

import {
  API_BASE_URL,
  CanWriteFilter,
  IInstallationsSelectRequest,
  InstallationsClient,
  InstallationsSelectRequest,
  InstallationsSelectResponce,
  InstallationView,
  Paginator
} from '../../../api';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {filter} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class InstallationService {
  currentInstallationId: number = 0;

  amountOfInstallations = new BehaviorSubject<number>(0);

  constructor(private _http: HttpClient,
              private _IC: InstallationsClient,
              private _router: Router,
              private _route: ActivatedRoute,
              @Optional() @Inject(API_BASE_URL) protected  baseUrl?: string) {

    _router.events
      .pipe(filter(_ => _ instanceof NavigationEnd))
      .subscribe((val) => console.log(_route));
    this._route.params.subscribe(
      params => {
        this.currentInstallationId = +params['installationId'];
        console.log(this.currentInstallationId);
      });

    this.updateAmountOfInstallations();
  }

  public getInstallationsList(paginator?: Paginator): Observable<InstallationsSelectResponce | null> {
    const data: IInstallationsSelectRequest = {
      filter: new CanWriteFilter(),
      page: paginator ? paginator : new Paginator({skip: 0, take: 25})
    };

    return this._IC.select(new InstallationsSelectRequest(data));
  }

  updateAmountOfInstallations(): void {
    this.getInstallationsList().subscribe(x => {
        this.amountOfInstallations.next(x.total);
      }
    );
  }

  installationChangedTrigger(installation: InstallationView) {
    console.log('installationChangedTrigger');

    // специально абсолютный путь, т.к. этот метод используется при выборе инсталляции через lookup сверху - т.е.,
    // может быть вызван с какого угодно роута сайта
    this._router.navigate(['installations', installation.id]);
  }

  search(s: string): Observable<InstallationsSelectResponce | null> {
    const data: IInstallationsSelectRequest = {
      filter: new CanWriteFilter(),
      page: new Paginator({skip: 0, take: 25})
    };

    data.filter.search = s;

    return this._IC.select(new InstallationsSelectRequest(data));
  }

}

