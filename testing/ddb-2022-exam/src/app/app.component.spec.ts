import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {CartComponent} from "./components/cart/cart.component";
import {LOCALE_ID} from "@angular/core";
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de');


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, CartComponent],
    providers: [{ provide: LOCALE_ID, useValue: 'de-DE' }],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ddb-2022-exam'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('DDB-2022-Exam');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toolbar span')?.textContent).toContain('Welcome to your Exam');
  });
});
