import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router, RoutesRecognized} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {InstallationService} from '../../services/installation.service';
import {Subscription} from 'rxjs/Subscription';
import {filter} from 'rxjs/operators';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'lime-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  installationsAmountSubscription: Subscription;
  installationId: number;

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _userService: UserService,
              private _installationService: InstallationService,
              private _authService: AuthService) {

    // this._router.events
    //   .subscribe(event => {
    //     console.log(event);
    //   });

    // this._route.queryParams
    //   .subscribe((params: Params) => {
    //     if (params['login']) {
    //       console.log('hi');
    //       this.redirectTo();
    //     }
    //   });
  }

  private amountOfInstallations: number = 0;

  ngOnInit() {
    this.installationsAmountSubscription = this._installationService.amountOfInstallations
      .subscribe(x => this.amountOfInstallations = x);

    this._userService.userDataUpdate.subscribe(x => {
      if (x === null) {
        console.log('я обновляю данные юзера');
        this._userService.getCurrentUsedData();
      }
    });
  }

  logout() {
    this._authService.logout();
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.installationsAmountSubscription.unsubscribe();
  }

}
