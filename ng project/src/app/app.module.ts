import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {GlobalModule} from './components/global/global.module';

import {AuthInterceptor} from './services/auth/auth.interceptor';
import {AuthGuard} from './services/auth/auth.guard';
import {AccountClient, API_BASE_URL, ColumnTooltipClient, InstallationsClient} from '../../api';

import {AppComponent} from './app.component';
import {AuthService} from './services/auth/auth.service';

import {L10nConfig, L10nLoader, TranslationModule, StorageStrategy, ProviderType, TranslatePipe} from 'angular-l10n';
import {HttpErrorRequestInterceptor} from './services/http-error-request.interceptor';
import {LayoutModule} from './components/layout/layout.module';


const l10nConfig: L10nConfig = {
  locale: {
    languages: [
      { code: 'en', dir: 'ltr' },
      { code: 'ru', dir: 'ltr' }
    ],
    language: 'en',
    storage: StorageStrategy.Cookie
  },
  translation: {
    providers: [
      { type: ProviderType.Static, prefix: './assets/localization/locale-' }
    ],
    caching: true,
    missingValue: 'No key'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    GlobalModule,
    LayoutModule,
    TranslationModule.forRoot(l10nConfig),
    AppRoutingModule // should be the last!!! The router accepts the first route that matches a navigation request path.
  ],
  providers: [
    AuthService,
    AuthGuard,
    Title,
    InstallationsClient,
    AccountClient,
    ColumnTooltipClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorRequestInterceptor,
      multi: true
    },
    {
      provide: API_BASE_URL,
      useValue: 'https://localhost:44342'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
