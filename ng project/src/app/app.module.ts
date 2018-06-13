import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDataGridModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxLookupModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,
    DxFormComponent,
    DxNumberBoxModule,
    DxDateBoxModule,
    DxTreeListModule,
    DxTextBoxModule } from 'devextreme-angular';
import { L10nConfig, L10nLoader, TranslationModule, ProviderType } from 'angular-l10n';
import 'devextreme-intl';
import * as ru from '../assets/ru.json';
import * as de from 'devextreme/localization/messages/de.json';
import { locale, loadMessages } from 'devextreme/localization';
import config from 'devextreme/core/config';



import { AppComponent } from './app.component';
import { Http, HttpModule, URLSearchParams } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { GoodEditComponent } from './good-edit/good-edit.component';
import { GoodEditFormComponent } from './good-edit-form/good-edit-form.component';
import { GoodEditHeaderComponent } from './good-edit-header/good-edit-header.component';
import { GoodEditDescriptionComponent } from './good-edit-description/good-edit-description.component';
import { PointsGridComponent } from './points-grid/points-grid.component';
import { GoodTreeComponent } from './good-tree/good-tree.component';

const l10nConfig: L10nConfig = {
  locale: {
      languages: [
          { code: 'en', dir: 'ltr' },
          { code: 'ru', dir: 'ltr' }
      ],
      language: 'en'
  },
  translation: {
      providers: [
        { type: ProviderType.Static, prefix: './assets/installationmodule.' },
        { type: ProviderType.Static, prefix: './assets/accountmodule.' },
        { type: ProviderType.Static, prefix: './assets/common.' },
        { type: ProviderType.Static, prefix: './assets/systemmodule.' }
      ],
      missingValue: 'No key'
  }
};

@NgModule({
  imports: [
      BrowserModule,
      DxDataGridModule,
      HttpClientModule,
      DxCheckBoxModule,
      DxButtonModule,
      DxSelectBoxModule,
      DxTextAreaModule,
      DxFormModule,
      DxNumberBoxModule,
      DxDateBoxModule,
      DxTreeListModule,
      DxTextBoxModule,
      DxLookupModule,
      HttpModule,
      TranslationModule.forRoot(l10nConfig)
  ],
  declarations: [
      AppComponent,
      GoodEditComponent,
      GoodEditFormComponent,
      GoodEditHeaderComponent,
      GoodEditDescriptionComponent,
      PointsGridComponent,
      GoodTreeComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
  localeStr: string;

  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
    this.localeStr = this.getLocale();  
    this.initGlobalize();
    locale(this.localeStr);
  }

  initGlobalize() {
    loadMessages(de);
    loadMessages(ru);
  }

  getLocale() {
      var locale = sessionStorage.getItem("locale");
      return locale != null ? locale : "ru";
  }

  setLocale(locale) {
      sessionStorage.setItem("locale", locale);
  }

}
