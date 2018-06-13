import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import {filter, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'lime-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(private router: Router, private activatedRoutes: ActivatedRoute, private titleService: Title) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoutes),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data))
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }

}
