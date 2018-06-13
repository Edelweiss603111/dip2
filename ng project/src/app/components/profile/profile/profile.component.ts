import {Component, OnInit, Renderer2} from '@angular/core';
import {Language} from 'angular-l10n';
import {ConfigService} from '../../../services/config.service';
import {AuthService} from '../../../services/auth/auth.service';
import {UserService} from '../../../services/user.service';
import {NgForm} from '@angular/forms';
import {IPassword} from '../../../shared/models/password.interface';
import {IUserData} from '../../../shared/models/userdata.interface';


@Component({
  selector: 'lime-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Language() lang: string;
  private _src = './assets/i/photo.png';

  private _userData: IUserData;
  private _userPwd: IPassword;

  private _minPwdLength: number;

  phoneValidationRules: Object;

  passwordComparison = () => {
    return this._userPwd.newPassword;
  };
  constructor(private _renderer: Renderer2,
              private _config: ConfigService,
              private _authService: AuthService,
              private _userService: UserService) {

    this._minPwdLength = this._config.minPasswordLength;

    this._userData = <IUserData>{};
  }

  ngOnInit() {
    this._userService.userDataUpdate.subscribe(x => this._userData = x);
  }

  // ****************************************
  // don't change it!


  checkComparison() {
    return true;
  }

  // *****************************************

  setPhone() {
    this._userService.setPhone(this._userData.phoneNumber);
  }

  setEmail() {
    this._userService.setEmail(this._userData.email);
  }

  confirmEmail() {
    this._userService.confirmEmail();
  }

  changePassword() {
    this._userService.changePassword(this._userPwd);
  }

  updateUserData() {
    this._userService.updateUserData(this._userData);
  }


}
