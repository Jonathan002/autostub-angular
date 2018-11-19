import { HttpHelperService } from './http-helper.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Autostub-Angular'; /*title*/
  constructor(
    private httpHelper: HttpHelperService
  ) { } /*constructor*/

  dataPlaceholder = undefined; /*dataPlaceholder*/
  getHttpData() {
    this.httpHelper.getHttpData().then(httpData => {
      this.dataPlaceholder = (<any>httpData).data;
    }).catch(e => console.log('Failed to get Stub Data'));
  } /*getHttpData*/
} /*AppComponentStub*/
