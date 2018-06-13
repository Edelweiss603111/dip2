import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InstallationService} from '../../../services/installation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {InstallationView, Paginator} from '../../../../../api';
import {Language} from 'angular-l10n';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'lime-installations',
  templateUrl: './my-installations.component.html',
  styleUrls: ['./my-installations.component.scss']
})
export class MyInstallationsComponent implements OnInit{
  @Language() lang: string;
  loading = true;

  @ViewChild('search') viewSearch: ElementRef;

  page: number = 1;
  pageSize: number = 5;

  searchString: string = '';

  private _amountOfInstallations;


  private _installationsList: Observable<InstallationView[] | null>;

  constructor(private _installationService: InstallationService,
              private _router: Router,
              private _route: ActivatedRoute
  ) {
  }


  updateInstallationList(page) {
    const paging = new Paginator({skip: (page - 1) * 5, take: 5});
    console.log(page);
    console.log(paging);


    this._installationsList = this._installationService.getInstallationsList(paging)
      .pipe(map(x => x.data));
  }

  ngOnInit() {
    this._amountOfInstallations = this._installationService.getInstallationsList(new Paginator({skip: 0, take: 5}))
      .pipe(map(x => x.total));
  }

  chooseInstallation(inst: InstallationView) {
    this._installationService.installationChangedTrigger(inst);
  }

  goToCreateInstallation() {
    this._router.navigate(['./create'], {relativeTo: this._route});
  }

  searchedValuehanged(e: any) {
    if (!e.value) {
      console.log('update')
      this.updateInstallationList(1);
      return;
    }
    this._installationsList = this._installationService.search(e.value)
      .pipe(map(x => x.data));
  }
}
