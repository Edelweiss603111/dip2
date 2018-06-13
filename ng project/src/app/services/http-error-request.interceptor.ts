import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs/index';
import {MessageService} from './message.service';
import {TranslationService} from 'angular-l10n';

@Injectable()
export class HttpErrorRequestInterceptor implements HttpInterceptor {

  constructor(
    public translation: TranslationService,
    private _messageService: MessageService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(catchError((err: any) => { // <--if error use a catch
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            // switch (err.status) {
            //
            //   case 400: {
            const reader = new FileReader();
            reader.onloadend = (e) => {
              this._messageService.errorMessage(`${this.translation.translate('Error')}: ${err.status} ${err.statusText};
                 ${this.translation.translate('Details')}: ${reader.result}`);
            };

            reader.readAsText(err.error);

            //     break;
            //   }
            //   case 500: {
            //     this._messageService.errorMessage('Error: ' + err.message + ' ' + request.body);
            //
            //     break;
            //   }
            //   case 503: {
            //     this._messageService.errorMessage('Error: ' + err.message + ' ' + request.body);
            //
            //     break;
            //   }
            //   default: {
            //     this._messageService.errorMessage('Error: ' + err.message + ' ' + request.body);
            //
            //     break;
            //   }
            // }
          }
        }
        // Other case throw an error
        return throwError(err);
      }));
  }
}
