import { Component, OnInit } from '@angular/core';
import {Language, LocaleService} from 'angular-l10n';

@Component({
  selector: 'lime-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent implements OnInit {
  @Language() lang: string;

  locales: string[] = [
    'ru', 'en'
  ];

  constructor(public locale: LocaleService) { }

  ngOnInit() {
  }

  selectLanguage(language: string): void {
    this.locale.setCurrentLanguage(language);
  }

}
