// =====================================================================;
//                            Sync Imports                              
// =====================================================================
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// =====================================================================
//                            Extra Code
// =====================================================================
// - Write Extra File Code Here (e.g. Import { fakeJsonToReturn } from './someplace' )
// ---------------------------------------------------------------------

// =====================================================================
//                      Sync Stub Declarations
// =====================================================================
// - Feel free to define values for any synced declaration logic. 
// - DO NOT RENAME ANY DECLARATION NAME BELOW inside here. The name itself
//   is synced with the original file's /*StubNameComments*/ and all unmatched 
//   declarations will be moved to the archive section. The console will warn 
//   you if anything has been archived.
// ---------------------------------------------------------------------;
@Injectable()
export class HttpHelperServiceStub {

  constructor(
    private http: HttpClient
  ){}

  getHttpData() {
    return Promise.resolve({data: true});
  }

};
