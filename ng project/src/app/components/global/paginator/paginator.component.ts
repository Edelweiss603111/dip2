import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Language} from 'angular-l10n';

class Page {
  page: number;
  itemsPerPage: number;
}

@Component({
  selector: 'lime-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Language() lang: string;

  _totalItems: any = null;

  get totalItems(): any {
    return this._totalItems;
  }

  @Input('totalItems')
  set totalItems(totalItems: any) {
    console.log('setter');
    console.log(totalItems);
    if (!totalItems) {
      return;
    }
    this._totalItems = totalItems;
    this.setPage(this.currentPage ? this.currentPage : 1);
  }


  @Input() currentPage: number;
  @Input() pageSize: number;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  // _pager object
  private _pager: any = {};

  ngOnInit() {
  }

  setPage(page: number) {
    if (page < 1 || page > this._pager.totalPages) {
      return;
    }
    this.changePage.next(page);
    this._pager = this.getPager(this.totalItems, page, this.pageSize);
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    // calculate total pages

    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the _pager control
    // let pages = _.range(startPage, endPage + 1);
    const pages = [];
    for (let i = startPage; i < (endPage + 1); i++) {
      pages.push(i);
    }

    // return object with all _pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };

  }

}
