import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Language} from 'angular-l10n';
import {DomhandlerService} from '../../../services/domhandler.service';
import {Observable} from 'rxjs/Observable';
import {fromEvent} from 'rxjs';
import {skip} from 'rxjs/operators';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from '../../../services/user.service';
import {IUserData} from '../../../shared/models/userdata.interface';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'lime-account-block',
  templateUrl: './account-block.component.html',
  styleUrls: ['./account-block.component.scss']
})
export class AccountBlockComponent implements OnInit, AfterViewInit {
  @Language() lang: string;
  @ViewChild('menu') viewMenu: ElementRef;
  @ViewChild('photo') viewPhoto: ElementRef;
  @ViewChild('accountBlock') viewAccountBlock: ElementRef;

  navbarWidth = 240;
  private _userDisplayName: string;

  private _menuOpened = false;

  private _selfClick: boolean; // клик по меню

  private _documentClickListener: Observable<any> = fromEvent(document, 'click');
  private _subscription: Subscription;

  constructor(private _authservice: AuthService,
              private _router: Router,
              private _route: ActivatedRoute,
              private _domhandler: DomhandlerService,
              private _userService: UserService,
              private _locationStrategy: LocationStrategy,
              private _renderer: Renderer2) {
    this._userDisplayName = '';
  }

  ngOnInit() {
    this._userService.userDataUpdate.subscribe(x => {
      if (x) {
        this._userDisplayName = x.displayName;
      }
    });
  }

  logout() {
    this._authservice.logout();
  }

  goToArina() {
    this._router.navigate(['./organizations'], {relativeTo: this._route.children[0].children[0]});

    this.toggleMenu();
  }

  ngAfterViewInit(): void {
    // this.hideMenu();
  }

  private toggleMenu(element?: HTMLElement) {
    this._selfClick = true;

    if (this._menuOpened) {
      this.hideMenu();
    } else {
      this.showMenu();
    }
    this._menuOpened = !this._menuOpened;
  }

  private absolutePosition(element: HTMLElement, target: HTMLElement): void {
    const elementDimensions = element.offsetParent ? {
      width: element.offsetWidth,
      height: element.offsetHeight
    } : this._domhandler.getHiddenElementDimensions(element);

    let top, right;


    top = target.getBoundingClientRect().bottom + 11; // 11 - поправка на размер стрелки
    right = document.body.clientWidth - target.offsetLeft - target.offsetWidth;

    element.style.position = 'absolute';
    element.style.top = top + 'px';
    element.style.right = right + 'px';
  }

  private showMenu() {
    this.absolutePosition(this.viewMenu.nativeElement, this.viewPhoto.nativeElement);

    this._renderer.setStyle(this.viewMenu.nativeElement, 'display', `block`);
    this._renderer.setStyle(this.viewMenu.nativeElement, 'visibility', `visible`);

    this.bindDocumentClickListener();
  }

  private hideMenu() {
    this.unbindDocumentClickListener();

    this._renderer.setStyle(this.viewMenu.nativeElement, 'display', `none`);
    this._renderer.setStyle(this.viewMenu.nativeElement, 'visibility', `hidden`);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this._menuOpened) {
      this._menuOpened = !this._menuOpened;
      this.hideMenu();
    }
  }

  bindDocumentClickListener() {
    this._subscription = this._documentClickListener
      .subscribe(event => {
          if (!this._selfClick) {
            this._menuOpened = false;
            this.hideMenu();
          }

          this._selfClick = false;
        }
      );
  }

  unbindDocumentClickListener() {
    this._subscription.unsubscribe();
  }

  onMenuClick() {
    this._selfClick = true;
  }

  goToProfile() {
    this._router.navigate(['profile']);
  }

}
