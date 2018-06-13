import { Component } from '@angular/core';
import { Service, GoodsTreeHierarchical } from './good-tree.service';
import { Language } from 'angular-l10n';
import { DxTreeListComponent } from 'devextreme-angular';

@Component({
  selector: 'app-good-tree',
  templateUrl: './good-tree.component.html',
  styleUrls: ['./good-tree.component.css'],
  providers: [Service]
})

export class GoodTreeComponent {
    @Language() lang: string;
    
    categories: number[];
    expandRows: any[];
    goodsTree: GoodsTreeHierarchical[];
    btnText: string;
    textBoxWidth: string;

    constructor(service: Service) {
        this.btnText = '+';
        this.goodsTree =  service.getGoodsTreeHierarchical();
        this.expandRows = [1];

        if (window.screen.width < 600) {
            this.textBoxWidth = "95%";
        } else {
            this.textBoxWidth = "100%";
        }

        this.categories = [1];
        for (let elem of this.goodsTree) {
            if (elem.items) {
                this.categories.push(this.categories[this.categories.length-1] + elem.items.length + 1);
            }
        }
        this.categories.pop();
    }

    expandAll(e) {
        if (this.btnText === '-') {
            this.btnText = '+';
            this.expandRows = [];
        } else {
            this.btnText = '-';
            this.expandRows = this.categories;
        }
    }
}
