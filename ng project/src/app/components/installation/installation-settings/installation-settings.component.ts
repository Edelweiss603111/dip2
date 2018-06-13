import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InstallationService} from '../../../services/installation.service';

@Component({
  selector: 'lime-installation-settings',
  templateUrl: './installation-settings.component.html',
  styleUrls: ['./installation-settings.component.scss']
})
export class InstallationSettingsComponent implements OnInit {
  installationId: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _installationService: InstallationService,
    private _router: Router
  ) {

    this._activatedRoute.params.subscribe(
      params => {
        // console.log('кокос');
        // console.log(params);
        this.installationId = +params['installationId'];
        // this.initializeComponent();
        // console.log(this._installationService.currentInstallation);
        // console.log(this.installationId);

        // if (!this._installationService.currentInstallation && this.installationId) {
        //   this._installationService.installationChangedTriggerWithoutNavigate(this.installationId);
        // }
        // this.initializeComponent();
      }
    );
    // this.installationId = this._activatedRoute.snapshot.params.installationId;
  }

  ngOnInit() {
  }

}

