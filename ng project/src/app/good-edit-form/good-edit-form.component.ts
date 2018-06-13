import { Component } from '@angular/core';
import { Service, Good } from './good-edit-form.service';
import DataSource from 'devextreme/data/data_source';
import { Language } from 'angular-l10n';

@Component({
  selector: 'app-good-edit-form',
  templateUrl: './good-edit-form.component.html',
  styleUrls: ['./good-edit-form.component.css'],
  providers: [Service]
})

export class GoodEditFormComponent {
    innerWidth: any;
    colCount: number;
    namesArray: string[];
    
    good: Good;
    kindsList: string[];
    typesList: string[];
    @Language() lang: string;

    constructor(service: Service) {
        this.innerWidth = window.screen.width;
        if (this.innerWidth > 1000) {
            this.colCount = 2
        } else {
            this.colCount = 1
        }
        this.good =  service.getGood();
        this.namesArray =  service.getNames();
        this.kindsList = service.getKindsList();
        this.typesList = service.getTypesList();
    }
}
