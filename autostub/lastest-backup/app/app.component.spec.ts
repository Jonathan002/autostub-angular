import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TEST_APP_MODULE, TEST_APP_WIDE_PROVIDERS } from './app.module.unit';
import { HttpHelperService } from './http-helper.service';
import { HttpHelperServiceStub } from './http-helper.service.stub';
import { HttpClient } from '@angular/common/http';


describe('AppComponent', () => {
  let fixture;
  let comp;
  let de;
  let el;
  let injector;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Object.assign(TEST_APP_MODULE, {
      providers: TEST_APP_WIDE_PROVIDERS,
      declarations: TEST_APP_MODULE.declarations.concat(AppComponent)
    })).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
    injector = fixture.debugElement.injector;
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('Autostub-Angular');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Autostub-Angular!');
  }));

  // Unit testing with the stubed httpHelperService
  it('should be able to get data from http helper service and assign it to a property', fakeAsync(() => {
    expect(app.getHttpData());
    tick();
    expect(app.dataPlaceholder).toEqual(true);
  }));

});
