import { NgModule, Component, enableProdMode, Inject } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Service, Point } from './points-grid.service';
import { Language } from 'angular-l10n';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-points-grid',
  templateUrl: './points-grid.component.html',
  styleUrls: ['./points-grid.component.css'],
  providers: [Service]
})
export class PointsGridComponent  {
  checkBoxValue: boolean;
  @Language() lang: string;
  SERVICE_URL : string = "http://localhost:4200/assets/points.json";


  points: Point[];
  gridDataSource: any = {};
  formatingDate: any;

  constructor(@Inject(Http) http: Http, service: Service) {
      this.points =  service.getPointList();
    this.gridDataSource.store = new CustomStore({
      load: function (loadOptions: any) {
          var params = '?';

          params += 'skip=' + loadOptions.skip || 0;
          params += '&take=' + loadOptions.take || 5;

          if(loadOptions.sort) {
              params += '&orderby=' + loadOptions.sort[0].selector;
              if(loadOptions.sort[0].desc) {
                  params += ' desc';
              }
          }
          console.log(params);
          return http.get("https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems" + params)
              .toPromise()
              .then(response => {
                  var json = response.json();

                  return {
                      data: json.items,
                      totalCount: json.totalCount
                  }
              })
              .catch(error => { throw 'Data Loading Error' });
      }
  });
  }
}
