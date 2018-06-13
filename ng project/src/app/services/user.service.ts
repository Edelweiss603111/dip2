import {Inject, Injectable, Optional} from '@angular/core';
import {catchError, filter, map} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, of} from 'rxjs/index';
import {TokenParams} from '../shared/models/token-params.model';
import {API_BASE_URL, AccountClient, ChangePasswordRequest, UserData, SetPhoneRequest, ChangeEmailRequest} from '../../../api';
import {IPassword} from '../shared/models/password.interface';
import {MessageService} from './message.service';

interface IUserData {
  id: number;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  name: string;
  surname: string;
  patronomic: string;
  displayName: string;
  culture: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userData: any;

  // private _user = new BehaviorSubject<number>(0);
  userDataUpdate = new BehaviorSubject<any>(null);
  // user = this.userDataUpdate.asObservable();

  private _getUserDataAPI = '/api/Account/GetUserData';
  private _changePasswordAPI = '/api/Account/ChangePassword';

  headersForTokenAPI = new HttpHeaders({
    'content-type': 'application/json; charset=utf-8'
  });

  constructor(
    private _http: HttpClient,
    private _AC: AccountClient,
    private _messageService: MessageService,
    @Optional() @Inject(API_BASE_URL) protected  baseUrl?: string
  ) {
  }

  getCurrentUsedData() {
    this._AC.getUserData().subscribe(r => {
      this.userDataUpdate.next(r);
    });
  }

  updateUserData(userData: IUserData) {
    const data = <UserData>userData;

    this._AC.updateUserData(data)
      .subscribe(x => {
          if (x > 0) {
            this._messageService.successfullMessage(this._messageService.dataSuccessfullyUpdatedText);
            this.getCurrentUsedData();
          }
        }
      )
    ;
  }

  changePassword(userPwd: IPassword) {
    const data = <ChangePasswordRequest>userPwd;

    this._AC.changePassword(data).subscribe(x => {
      if (x.value) {
        this._messageService.successfullMessage(this._messageService.dataSuccessfullyUpdatedText);
      } else {
        this._messageService.errorMessage(x.errors[0].message);
      }

    });
  }

  setPhone(phone: string) {
    const data = new SetPhoneRequest({
      phoneNumber: phone,
      confirm: false
    });

    this._AC.setPhone(data).subscribe(x => {
      if (x.value) {
        this._messageService.successfullMessage(this._messageService.dataSuccessfullyUpdatedText);
      } else {
        this._messageService.errorMessage(x.errors[0].message);
      }
    });
  }

  setEmail(email: string) {
    const data = new ChangeEmailRequest({
      email: email
    });

    this._AC.changeEmail(data).subscribe(x => {
        if (x.value) {
          this._messageService.successfullMessage(this._messageService.dataSuccessfullyUpdatedText);
        } else {
          this._messageService.errorMessage(x.errors[0].message);
        }
      }
    );
  }

  confirmEmail() {
    this._AC.sendEmailConfirmation().subscribe(x =>
      this._messageService.infoMessage('A verification link has been sent to your email account'));
  }

  destroyCurrentUser() {
    this.userDataUpdate.next(null);
  }
}

