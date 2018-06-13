import {Injectable} from '@angular/core';
import notify from 'devextreme/ui/notify';
import {Language, TranslationService} from 'angular-l10n';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  @Language() lang: string;

  _types = ['success', 'error', 'custom', 'info', 'warning'];
  _defaultDisplayTime = 3000;
  _defaultSuccessMessage = 'Successful';
  _defaultErrorMessage = 'Error';
  _defaultInfoMessage = 'Info';
  _defaultWarningMessage = 'Warning';

  dataSuccessfullyUpdatedText = 'Data successfully updated';

  constructor(
    public translation: TranslationService
  ) {
  }

  private _showMessage(text: string, type: string, displayTime: number) {
    notify({
      position: {my: 'top right', at: 'top right', of: '#wrapping', offset: '-10 10'},
      message: text,
      maxWidth: '300px',
      maxHeight: 'auto'

    }, type, displayTime);
  }

  successfullMessage(text: string = this._defaultSuccessMessage, displayTime: number = 2000) {
    this._showMessage(this.translation.translate(text), this._types[0], displayTime);
  }

  // customMessage(text: string = 'CustomText', displayTime: number = this._defaultDisplayTime) {
  //   this._showMessage(text, this._types[0], displayTime);
  // }

  errorMessage(text: string = this._defaultErrorMessage, displayTime: number = this._defaultDisplayTime) {
    if (text[text.length - 1] === '.') {
      text = text.slice(0, text.length - 1);
    }
    this._showMessage(text, this._types[1], displayTime);
  }

  infoMessage(text: string = this._defaultInfoMessage, displayTime: number = this._defaultDisplayTime) {
    this._showMessage(this.translation.translate(text), this._types[3], displayTime);
  }

  warningMessage(text: string = this._defaultWarningMessage, displayTime: number = this._defaultDisplayTime) {
    this._showMessage(this.translation.translate(text), this._types[4], displayTime);
  }

}
