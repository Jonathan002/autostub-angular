import { AppComponentStub } from './../../autostub/lastest-backup/app/app.component.stub';
import { HttpHelperServiceStub } from './http-helper.service.stub';
import { HttpHelperService } from './http-helper.service';
import { NgModule, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';


class HttpClientStub {
  get() {
    return Promise.resolve({data: true});
  }
}


export const TEST_APP_WIDE_PROVIDERS: Provider[] = [
  // Pretend AppComponent uses HttpService through Dependency Injection
  { provide: HttpHelperService, useClass: HttpHelperServiceStub },
  // Also Stub HttpClient for HttpHelperServiceStub when it gets created
  { provide: HttpClient, useClass: HttpClientStub },
];

// Further example to also bundle in stub providers from other modules with Array.concat()
// export const TEST_APP_WIDE_PROVIDERS: Provider[] = [
//   // .....
// ].concat(
//   TEST_PROVIDERS_APP_SHARED,
//   TEST_PROVIDERS_APP_CORE,
//   TEST_PROVIDERS_SOME_LAZY_LOADED_MODULE,
// );

// We can just use Array.Concat the real AppComponent to Stub Declarations Array later in spec file
export const TEST_APP_MODULE: any = {
  declarations: [
      AppComponentStub,
  ]
};

// Create StubModule
@NgModule(TEST_APP_MODULE)
export class AppUnitTestModule {}