import {MenuList} from '../menu-list.service';
import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MenuItem} from '../menu-item.model';
import {Router} from '@angular/router';
import {Language} from 'angular-l10n';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'lime-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MenuList]
})
export class NavbarComponent implements AfterViewInit, OnInit {
  objectsAmount: Observable<number>;

  @Language() lang: string;

  @ViewChild('navbar') viewNavBar: ElementRef;
  @ViewChild('hamburgerCheckbox') viewHamburgerCheckbox: ElementRef;
  @ViewChild('hamburger') viewHamburger: ElementRef;

  navbarWidth = 240; // width of our navbar
  smallWindowWidth = 640; // when the window are small
  menu: Array<MenuItem> = [];

  isSmallScreen: boolean;
  isNavbarOpened = true;

  mainLayoutDiv: HTMLElement;

  constructor(private _renderer: Renderer2, private _menuList: MenuList,
              private _elRef: ElementRef,
              private _router: Router) {
    this.checkScreenState();
    this.menu = this._menuList.getMenu();
  }

  ngOnInit() {
    this.mainLayoutDiv = this._elRef.nativeElement.parentElement.getElementsByClassName('main-layout-div')[0];
  }

  ngAfterViewInit(): void {
    this.toggle_navbar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkScreenState(); // +
    this.toggle_navbar();
  }

  checkScreenState() {
    this.isSmallScreen = window.screen.width < this.smallWindowWidth;
    this.isNavbarOpened = !this.isSmallScreen;
  }


  hideHumburger() {
    this._renderer.setStyle(this.viewHamburger.nativeElement, 'display', `none`);
    this._renderer.setStyle(this.viewHamburger.nativeElement, 'visibility', `hidden`);
  }

  showHumburger() {
    this._renderer.setStyle(this.viewHamburger.nativeElement, 'display', `block`);
    this._renderer.setStyle(this.viewHamburger.nativeElement, 'visibility', `visible`);
  }


  toggle_navbar() {
    if (!this.isSmallScreen) {
      // this._renderer.setStyle(document.body, 'margin-right', `${this.navbarWidth}px`);
      this._renderer.setStyle(this.mainLayoutDiv, 'margin-right', `${this.navbarWidth}px`);
      this.viewNavBar.nativeElement.style.marginRight = `0px`;
      this.hideHumburger();
      return;
    }

    this.showHumburger();
    if (!this.isNavbarOpened) {
      this.toggleMargin(0, -this.navbarWidth);
    } else {
      this.toggleMargin(this.navbarWidth, 0);
    }
    this.viewHamburgerCheckbox.nativeElement.checked = !this.isNavbarOpened;
    this._renderer.setStyle(this.mainLayoutDiv, 'margin-right', `0`);
  }


  toggleMargin(bodyMargin: number, navbarMargin: number) {
    this.isNavbarOpened = !this.isNavbarOpened;
    this.viewNavBar.nativeElement.style.marginRight = `${navbarMargin}px`;

    // margin toggle hamburger
    if (bodyMargin !== 0) {
      this._renderer.setStyle(this.viewHamburger.nativeElement, 'margin-right', `${this.navbarWidth + 10}px`);
    } else {
      this._renderer.setStyle(this.viewHamburger.nativeElement, 'margin-right', `10px`);
    }
  }

  goToMyInstallations() {
    this._router.navigate(['installations']);
  }

}
