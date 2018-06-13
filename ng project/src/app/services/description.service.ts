import {Injectable} from '@angular/core';
import {ColumnTooltipClient} from '../../../api';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(
    private _CTC: ColumnTooltipClient,
  ) {
  }

  getDescription(entityName: string) {
    return this._CTC.columnTooltip(entityName);
  }
}
