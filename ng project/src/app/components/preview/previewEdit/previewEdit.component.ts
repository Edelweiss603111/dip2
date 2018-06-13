import {Component, Inject, OnInit, Optional, ViewChild} from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import { DxFormComponent } from 'devextreme-angular';

import { API_BASE_URL, OrganizationsClient, Organization } from '../../../../../api';

import { BaseComponentEditor } from '../gridBase/gridBase.component';
import { MessageService } from '../../../services/message.service';

@Component({
    selector: 'lime-previewEdit',
    templateUrl: './previewEdit.component.html',
    styleUrls: ['./previewEdit.component.scss']
  })
  
  
export class PreviewEditComponent extends BaseComponentEditor implements OnInit{
    @ViewChild(DxFormComponent) dataForm: DxFormComponent;
    private formDataSource: any;

    constructor( @Optional() @Inject(API_BASE_URL) protected originUrl, protected route: ActivatedRoute, private OC: OrganizationsClient,
            protected location: Location, protected messageService: MessageService) {
        super(originUrl, route, OC, location, messageService);
      }

    ngOnInit() {
        super.ngOnInit();
        this.formDataSource = this.initDataForm(this.dataForm);
    }

    createEntity() {
        return new Organization();
    }

}