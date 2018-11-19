import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpHelperService {

  constructor(
    private http: HttpClient,
  ) { } /*constructor*/

  getHttpData() {
    return this.http.get('url').toPromise();
  } /*getHttpData*/
} /*HttpHelperServiceStub*/
