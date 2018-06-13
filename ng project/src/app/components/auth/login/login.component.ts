import {Component, EventEmitter, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import {Language} from 'angular-l10n';

import {Message} from '../../../shared/models/message.model';
import {fadeStateTrigger} from '../../../shared/animations/fade.animation';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'lime-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeStateTrigger]
})
export class LoginComponent implements OnInit {
  @Language() lang: string;
  message: Message;

  model: any = {};
  loading = false;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    this.model.RememberMe = false;
  }

  ngOnInit() {
    console.log('Login.component. Check if user authorized');
    console.log(this.authService.checkLogin());

    // reset login status
    // this.authService.logout();

    // if already logged in - redirect to main page
    if (this.authService.checkLogin()) {
      console.log('login.component Посылает нас на ../installations');
      // this.router.navigate(['/installations']);
      this.router.navigate(['./']);
    }


    this.message = new Message('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({
            text: 'Теперь вы можете зайти в систему',
            type: 'success'
          });
        } else if (params['accessDenied']) {
          this.showMessage({
            text: 'Для работы с системой вам необходимо войти',
            type: 'warning'
          });
        }
      });
  }

  login(form: NgForm) {

    console.log('doLogin');
    this.loading = true;


    this.authService.login(this.model.Username, this.model.Password, this.model.RememberMe)
      .subscribe(
        result => {
          if (result === true) {

            // login successful
            // console.log(this.route);
            // this.router.navigate(['../']);
            if (this.authService.redirectUrl) {
              this.router.navigate([this.authService.redirectUrl]);
            } else {
              this.router.navigate(['/installations']);
            }
          } else {
            // login failed
            form.reset();
            this.showMessage({
              text: 'Username or password is incorrect',
              type: 'warning'
            });
            this.loading = false;
          }
        }
      );
  }

  private showMessage(message: Message) {
    this.message = message;

    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }


  onShown() {

  }

  showLoadPanel() {
    this.loading = true;
  }

  onHidden() {
  }
}
