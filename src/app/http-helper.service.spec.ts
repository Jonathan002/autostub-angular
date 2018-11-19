import { TestBed, inject } from '@angular/core/testing';

import { HttpHelperService } from './http-helper.service';
import { TEST_APP_WIDE_PROVIDERS } from './app.module.unit';

class HttpHelperServiceReal {}
describe('HttpHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // Just alias the real service with a different name, since the fake one is already using the real service's namespace.
      providers: TEST_APP_WIDE_PROVIDERS.concat({ provide: HttpHelperServiceReal, useClass: HttpHelperService  }),
    });
  });

  it('should be created', inject([HttpHelperServiceReal], (service: HttpHelperService) => {
    expect(service).toBeTruthy();
  }));
});
