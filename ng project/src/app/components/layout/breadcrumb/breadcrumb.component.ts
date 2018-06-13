import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, Router} from '@angular/router';

import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Language} from 'angular-l10n';

interface IBreadcrumb {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'lime-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {
  @Language() lang: string;

  public breadcrumbs: IBreadcrumb[] = [];
  ROUTE_DATA_BREADCRUMB: string = 'title';

  @Input() useUrl = true;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {


    // subscribe to the NavigationEnd event
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        // console.log(event);
        let root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
      });

    // this.router.events.subscribe(event => {
    //   console.log('event!');
    //   if (event instanceof NavigationEnd) {
    //     const root: ActivatedRoute = this.router.routerState.root;
    //     if (this.useUrl) {
    //       this.breadcrumbs = this.getBreadcrumbsFromUrl(event.urlAfterRedirects);
    //     }
    //     else {
    //       this.breadcrumbs = this.getBreadcrumbs(root);
    //     }
    //   }
    // };
  }

  // private getBreadcrumbsFromUrl(url: string): IBreadcrumb[] {
  //   console.log(url);
  //
  //   const routes = url.split('/');
  //   console.log(routes);
  //
  //   const res: IBreadcrumb[] = [];
  //   let previous = '';
  //
  //   for (const route of routes) {
  //     if (!isNaN(Number(route)) || route === 'Edit') {
  //       continue;
  //     }
  //
  //     console.log('part: ' + route);
  //     previous = `${previous}/${route}`;
  //
  //     console.log('previous: ' + previous);
  //
  //     let new_breadcrumb = {
  //       // label: this.translate(route),
  //       label: route,
  //       routerLink: previous,
  //       routerLinkActiveOptions: 'active'
  //     };
  //     console.log(new_breadcrumb);
  //     res.push(new_breadcrumb);
  //   }
  //
  //   return res;
  // }


  ngOnInit(): void {

  }


  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    // console.log('i\'m inside');

    // console.log('route');
    // console.log(route);
    // console.log('route.routeConfig');
    // console.log(route.routeConfig);

    // debugger;

    let children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (let child of children) {

      // verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(this.ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // console.log(child.snapshot.url);
      if (child.snapshot.url.length !== 0) {
        // if (child.snapshot.routeConfig.path.startsWith(':')) {
        //   let routeURL:
        // }
        let routeURL: string = child.snapshot.url.filter(urlSegment => urlSegment.path !== '').map(segment => segment.path).join('/');
        url += `/${routeURL}`;
        // console.log('routeURL: ' + routeURL);
        // console.log('url:' + url);
        // console.log(child.snapshot.params);


        // console.log(url);
      }

      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[this.ROUTE_DATA_BREADCRUMB],
        routerLink: url
      };

      // if (route.routeConfig == null || route.routeConfig.hasOwnProperty('loadChildren')) {
      //   return this.getBreadcrumbs(child, url, breadcrumbs);
      // }

      //
      // // filter lazyloading routes
      // if (route.routeConfig && route.routeConfig.hasOwnProperty('loadChildren')) {
      //   return this.getBreadcrumbs(child, url, breadcrumbs);
      // }

      if (breadcrumbs.findIndex(_ => JSON.stringify(_) === JSON.stringify(breadcrumb)) === -1) {
        breadcrumbs.push(breadcrumb);
      }
      // console.log(breadcrumb);
      // console.log(breadcrumbs);

      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }


}
