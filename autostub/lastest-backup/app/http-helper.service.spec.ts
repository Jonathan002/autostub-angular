import { TestBed, inject } from '@angular/core/testing';

import { HttpHelperService } from './http-helper.service';
import { TEST_APP_WIDE_PROVIDERS } from './app.module.unit';

describe('HttpHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: TEST_APP_WIDE_PROVIDERS,
    });
  });

  it('should be created', inject([HttpHelperService], (service: HttpHelperService) => {
    expect(service).toBeTruthy();
  }));
});
