import {Inject, OnInit, Optional} from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import {Subject} from 'rxjs/Subject';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
// import {Observable} from 'rxjs';
import { DxFormComponent, DxDataGridComponent } from 'devextreme-angular';
import { Localization } from 'angular-l10n';

import {
  API_BASE_URL, InstallationFilter, SelectRequestBaseOfInstallationFilter, Paginator,
  ISelectRequestBaseOfInstallationFilter, SwaggerException
} from '../../../../../api';

import { MessageService } from '../../../services/message.service';


export class LocalizableComponentBase extends Localization {
	protected translate(key: string, args?: any, lang?: string): string {
		return this.translation.translate(key, args, lang);
	}
}

export class HelpMessageService extends LocalizableComponentBase {
	protected confirmDialogVisible : boolean;
	protected confirmDialogMessage : string;
	protected confirmDialogHeader : string;
	protected confirmDialogIcon: string;
	protected confirmDialogAccept : (() => void) | null;
    protected confirmDialogReject: (() => void) | null;
	protected onError : (e: Error) => boolean;

	constructor(protected messageService: MessageService) {
		super();
	}

	protected confirm(accept: () => void, reject: () => void, message: string, header?: string, icon?: string) {
		this.confirmDialogAccept = accept;
		this.confirmDialogReject = reject;
		this.confirmDialogHeader = header ? header : "";
		this.confirmDialogVisible = true;
	}

	protected confirmAccept() {
		if (this.confirmDialogAccept)
			this.confirmDialogAccept();

		this.confirmDialogVisible = false;
		this.confirmDialogAccept = null;
		this.confirmDialogReject = null;
	}

	protected confirmReject() {
		if (this.confirmDialogReject)
			this.confirmDialogReject();

		this.confirmDialogVisible = false;
		this.confirmDialogAccept = null;
		this.confirmDialogReject = null;
	}

	protected msgServerError(): string { return this.translate("Server error"); }
	protected msgNotEnoughRights(strong: boolean = false): string {
		return this.translate("Not enough rights") + (strong ? "" : "?");
	}
	public pushError(summary: string, detail?: string) {
		this.pushMessage('error', summary, detail);
	}

	public pushMessage(severity: string, summary: string, detail?: string) {

		//if (this.messages.length == 0) {
		//	this.messages = [];
		//}

		//this.messages.push({ severity: severity, summary: summary, detail: detail });
		//console.log(`${severity} ${summary} ${detail}`);

		// this.messageService.add({ severity: severity, summary: summary, detail: detail ? detail : '' });
	}

	protected processError(e: Error) {
		var pe = true;
		if (this.onError)
			pe = !this.onError(e);

		if (pe) {
			var sw = <SwaggerException>e;
			if (sw) {
				var detail =
					`${sw.message}<br><b>${this.translate("Result:")}</b> ${sw.result}<br><b>${this.translate("Status: ")}</b> ${sw.status}<br><b>${this.translate("Responce:")}</b> ${sw.response}`;

				var header = this.msgServerError();
				if (sw.status === 401) // not enough rights
				{
					header = this.msgNotEnoughRights(true);
					detail = `<b>${this.translate("Responce:")}</b> ${sw.response}`;
				}

				this.pushError(header, detail);

				console.error(detail);
			}
			else
				this.pushError(this.translate(e.name), this.translate(e.message));

			console.error(e);
		}
	}
}

export let baseType : {
	id,
	name,
	description,
	installationId,
	inn,
	isMainOrganization
} | null;

export let baseClient: {
	insert(entity),
	delete(id),
	update(entity),
	select(request),
	select2(id)
};

//baseClient = new Organization();


export class BaseSelectRequest extends SelectRequestBaseOfInstallationFilter {}
export class IBaseSelectFilter implements ISelectRequestBaseOfInstallationFilter {
	filter: InstallationFilter;
	page: Paginator;
}

export class GridBaseComponent extends HelpMessageService {

    protected gridDataSource: any = [];
	protected selectRequest: BaseSelectRequest;
	protected data: ISelectRequestBaseOfInstallationFilter;
	protected selectedValueName: string;
	protected dataGridBase: DxDataGridComponent;

	protected installationID = this.routeBase.snapshot.params['installationId'];

    constructor(private authServiceBase: AuthService, private httpBase: HttpClient, private client: any, private routerBase: Router,
				protected routeBase: ActivatedRoute, protected selectData: ISelectRequestBaseOfInstallationFilter,
				protected messageService: MessageService, @Optional() @Inject(API_BASE_URL) protected  baseUrlBase?: string) {
		super(messageService);
		baseClient = client;
		this.data = selectData;
	}
	
	initDataGrid(dataGrid: DxDataGridComponent) {
		this.dataGridBase = dataGrid;
	}
	  	
	getGridData() {
		this.selectRequest = new BaseSelectRequest(this.data);
		this.selectRequest.filter.installationId = this.installationID;
		baseClient.select(this.selectRequest)
			.subscribe(x => { 
				for (var entity of x.data) {
					this.gridDataSource.push(entity);
				}
			});
		return this.gridDataSource;
	}

	private editCurrentEntity(): void {
		if ( baseType != null ) {
			this.routerBase.navigate(['./', 'Edit', baseType.id ], {relativeTo: this.routeBase});
		}
		else
			this.messageService.errorMessage();
	}

	protected entitiesProcessSearch(searchTerm: string) : void {
		this.selectRequest =  new BaseSelectRequest(this.data);
		this.selectRequest.filter.search = searchTerm;
	}

	protected entitiesCanEdit() : boolean {
		return !!baseType;
	}

	protected entitiesCanDelete() : boolean {
		var canWrite = true;
		var i = (<any>baseType) as { canWrite: boolean };
		if (i)
			canWrite = i.canWrite;
		return baseType != null && canWrite;
	}

	onOptionChanged(ev) {
		if (ev.name.toLowerCase() === "searchpanel")
		{
			this.entitiesProcessSearch(ev.value);
		}
	}

	private entitiesAddNew() : void {
		this.routerBase.navigate(['./', 'Edit', 'Add' ], {relativeTo: this.routeBase});
	}

	/*protected entitiesUpdateProcess(obj: T) {
		this.gridDataSource.update(obj)
			.then (r => {
				if (r > 0)
				{
					this.messageService.successfullMessage();
				}
				else
					this.messageService.errorMessage();
			})
			.catch(e => { this.processError(e); });
	}*/

	protected entitiesRequest() {
		baseClient.select(this.selectRequest)
			.subscribe(x => { this.gridDataSource = [];
				for (var OrganizationsInfo of x.data) {
					this.gridDataSource.push(OrganizationsInfo);
				}
			})
			//.catch(e => { this.processError(e); });
	}

  	protected entitiesDeleteConfirm(header: string, icon: string) : void {
		this.confirm(() => this.entitiesDeleteProcess(), () => {}, this.entitiesSelectedView(), header, icon);
	}
	
	protected entitiesSelectedView() : string {
		if (!baseType)
			return 'Not selected';

		return `${baseType.name}`;
	}

	onSelectionChanged(ev) {
		baseType = ev.selectedRowsData[0];
		if (baseType) {
			this.selectedValueName = baseType.name;
		} else {
			this.selectedValueName = '';
		}
	}

	protected entitiesDeleteProcess() {
		let id = baseType.id;
		baseClient.delete(id)
			.subscribe(x => {
				this.entitiesRequest();
				this.messageService.successfullMessage();
			})
			//.catch(e => { this.processError(e); });
	}

}


export class BaseComponentEditor {//implements OnInit{
	//public model : BaseAngularModel<TSelectRequest, TSelectResponce, T>;

	protected entityId: number;
	protected entitiesEditorSourceIsNew:  boolean;
	protected installationID = this.route.snapshot.params['installationId'];
	protected dataFormBase: DxFormComponent;

	constructor( @Optional() @Inject(API_BASE_URL) protected originUrl, protected route: ActivatedRoute,
				private client: any, protected location: Location, protected messageService: MessageService) {
		//this.model = new BaseAngularModel(this.TSelectRequest, this.TSelectResponce, this.T);
		baseClient = client;
        //this.organizations = new OrganizationsClient(fetchWithCookies, originUrl);
      }

	ngOnInit() {
        this.entityId = Number(this.route.snapshot.params["organizationId"]);
        this.entitiesEditorSourceIsNew = Number.isNaN(this.entityId);
    
        if (!this.entitiesEditorSourceIsNew) {
            this.entitiesRequest();
        } else {
			this.entitiesAddNew();
		}
	}

	initDataForm(dataForm: DxFormComponent) {
		this.dataFormBase = dataForm;
		return baseType;
	}

    protected entitiesRequest() {
        baseClient.select2(this.entityId)
                .subscribe(r => { 
                    if (r)
						baseType = r;
                    else { 
                        baseType = null;
                        this.messageService.errorMessage();
                    }
                });
            //.catch(e => { this.processError(e); });
    }
        
    protected createEntity() :any {
		throw "Not implemented exception";
	};
    
    private entitiesAddNew() : void {
        baseType = this.createEntity();
        baseType.isMainOrganization = false;
        baseType.installationId = this.installationID;
        this.entitiesEditorSourceIsNew = true;
    }

    private entitiesEditorOk(editorData) : void {
		baseType = editorData;
        let isValid = this.dataFormBase.instance.validate().isValid;
        if(!isValid) {
            return;
        }
        if (baseType === null) {
            this.messageService.errorMessage();
            return;
        }

        if(this.entitiesEditorSourceIsNew)
            this.entitiesInsertProcess();
        else
			this.entitiesUpdateProcess();
		baseType = null;
    }

    protected entitiesInsertProcess() {
		baseClient.insert(baseType)
				.subscribe (r => { 
			if (r.id > 0)
				{
					this.messageService.successfullMessage();
					this.entitiesEditorCancel();
				}
				else
					this.messageService.errorMessage();
			})
                //.catch(e => { this.processError(e); });
	}

	protected entitiesUpdateProcess() {
		console.log(baseType);
		baseClient.update(baseType)
			.subscribe (r => { 
                if (r > 0)
                    {
                        this.messageService.successfullMessage();
                        this.entitiesEditorCancel();
                    }
                    else
						this.messageService.errorMessage();
			})
			//.catch(e => { this.processError(e); });
	}
        
	private entitiesEditorCancel() : void {
		baseType = null;
		this.location.back();
	}
  }

/*export class BaseAngularModel<TSelectRequest, TSelectResponce, T> {
	constructor(OrganizationsRequest: TSelectRequest, OrganizationsResponce: TSelectResponce, OrganizationsEditorSource: PreviewBaseType) {
		this._observableOrganizationsRequest = new BehaviorSubject<TSelectRequest>(OrganizationsRequest);
		this._observableOrganizationsResponce = new BehaviorSubject<TSelectResponce>(OrganizationsResponce);
		this._observableOrganizationsEditorSource = new BehaviorSubject<PreviewBaseType | null>(OrganizationsEditorSource);

		this._observableOrganizationsRequest.subscribe(x => {this._changes.next({property: "OrganizationsRequest", value: x, source: this });});
		this._observableOrganizationsResponce.subscribe(x => {this._changes.next({property: "OrganizationsResponce", value: x, source: this });});
		this._observableOrganizationsEditorSource.subscribe(x => {this._changes.next({property: "OrganizationsEditorSource", value: x, source: this });});

	}


	private _observableOrganizationsRequest : BehaviorSubject<TSelectRequest>;
	public get observableOrganizationsRequest() : Observable<TSelectRequest>{
		return this._observableOrganizationsRequest.asObservable();
	}

	public get OrganizationsRequest() : TSelectRequest {
		return this._observableOrganizationsRequest.getValue();
	}
	public set OrganizationsRequest(value: TSelectRequest) {
		this._observableOrganizationsRequest.next(value);
	}

	private _observableOrganizationsResponce : BehaviorSubject<TSelectResponce>;
	public get observableOrganizationsResponce() : Observable<TSelectResponce>{
		return this._observableOrganizationsResponce.asObservable();
	}

	public get OrganizationsResponce() : TSelectResponce {
		return this._observableOrganizationsResponce.getValue();
	}
	public set OrganizationsResponce(value: TSelectResponce) {
		this._observableOrganizationsResponce.next(value);
	}


	private _observableOrganizationsEditorSource : BehaviorSubject<PreviewBaseType | null>;
	public get observableOrganizationsEditorSource() : Observable<PreviewBaseType | null>{
		return this._observableOrganizationsEditorSource.asObservable();
	}

	public get OrganizationsEditorSource() : PreviewBaseType | null {
		return this._observableOrganizationsEditorSource.getValue();
	}
	public set OrganizationsEditorSource(value: PreviewBaseType | null) {
		this._observableOrganizationsEditorSource.next(value);
	}
	private _changes: Subject<{property: string, value: any, source: BaseAngularModel<TSelectRequest, TSelectResponce, T>}> = new Subject<{
		property: string,
		value: any,
		source: BaseAngularModel<TSelectRequest, TSelectResponce, T>
	}>();
	public get changes(): Observable<{property: string, value: any}> {
		console.log(this._changes.next());
		return this._changes.asObservable();
	}
}*/