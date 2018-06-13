import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TranslationModule, TranslatePipe} from 'angular-l10n';
import {DxButtonModule, DxLoadPanelModule} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    TranslationModule,
    DxButtonModule,
    DxLoadPanelModule
  ],
  exports: [
    CommonModule,
    TranslationModule,
    DxButtonModule,
    DxLoadPanelModule
  ]
})
export class SharedModule { }
