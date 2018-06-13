import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';

import { API_BASE_URL, OrganizationsClient, Paginator, InstallationFilter } from '../../../../../api';

import { GridBaseComponent } from '../gridBase/gridBase.component';
import { MessageService } from '../../../services/message.service';


@Component({
	selector: 'lime-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.scss']
})


export class PreviewComponent extends GridBaseComponent
								implements OnInit {
	protected gridDataSource: any = [];
	@ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
	
	constructor(private authService: AuthService, private http: HttpClient, private OC: OrganizationsClient,
				private router: Router, protected route: ActivatedRoute,
				protected messageService: MessageService, @Optional() @Inject(API_BASE_URL) protected  baseUrl?: string) {
		super(authService,
				http,
				OC,
				router,
				route,
				{ filter: new InstallationFilter(), page: new Paginator({skip: 0, take: 100})},
				messageService,
				baseUrl);
	}

	ngOnInit () {
		this.gridDataSource = this.getGridData();
		this.initDataGrid(this.dataGrid);
	}
}