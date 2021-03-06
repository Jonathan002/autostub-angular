// =====================================================================;
//                            Sync Imports                              
// =====================================================================
import { HttpHelperService } from './http-helper.service';
import { Component } from '@angular/core';
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
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponentStub {

  title = undefined;
  constructor(
    private httpHelper: HttpHelperService
  ){}

  dataPlaceholder = undefined;
  getHttpData() {
    return undefined;
  }

};
