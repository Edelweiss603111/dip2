import { Component } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Language() lang: string;
  title = 'app';
}
