import {Component, OnInit, ViewChild} from '@angular/core';
import {InstallationService} from '../../../services/installation.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import {InstallationView} from '../../../../../api';

import {Language} from 'angular-l10n';
import {filter} from 'rxjs/operators';
import {isNull} from 'util';

interface IInstallation {
  name: string;
}

@Component({
  selector: 'lime-installation-selector',
  templateUrl: './installation-selector.component.html',
  styleUrls: ['./installation-selector.component.scss']
})
export class InstallationSelectorComponent implements OnInit {
  @Language() lang: string;
  @ViewChild('lookup') viewLookup: any;

  private _selectedInstallation: InstallationView | null;
  items: any;
  current: number = null;
  installationId: number = null;

  constructor(private _installationService: InstallationService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router
  ) {

    this._installationService.getInstallationsList().subscribe(x => {
        this.items = x.data;
      }
    );

    _router.events
      .pipe(filter(_ => _ instanceof NavigationEnd))
      .subscribe((val) => {

          this._installationService.getInstallationsList().subscribe(x => {
              this.items = x.data;

              this._activatedRoute.children[0].params.subscribe(
                params => {
                  this.installationId = +params['installationId'];

                  if (this.installationId) {
                    const elem = this.items.find(_ => _.id === this.installationId);
                    this._selectedInstallation = this.items[this.items.indexOf(elem)];
                  } else {
                    this._selectedInstallation = null;
                  }
                }
              );
            }
          );

        }
      );
  }

  changed(e) {
    if (JSON.stringify(e.previousValue) === JSON.stringify(e.value)) {
      return;
    }
    // const navigate =
    //   !(!isNull(e.previousValue) && isNull(e.value)) ||
    //   ((this._router.url === '/installations') && (isNull(e.previousValue)));
    // console.log(navigate);
    this._installationService.installationChangedTrigger(e.value);
  }

  ngOnInit(): void {

  }

}
