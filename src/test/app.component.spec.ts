import { AppComponent } from '../app/app.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { LicenseManager } from 'ag-grid-enterprise';
import { LICENSE_KEY } from '../app/license-key.js';

LicenseManager.setLicenseKey(LICENSE_KEY);

describe('Component AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        HttpClientModule,
        AgGridModule.withComponents([])
      ],
      providers: []
    });
  });

  it('should set the license key', () => {
    spyOn(LicenseManager, 'setLicenseKey');

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(LicenseManager.setLicenseKey).toHaveBeenCalledWith(LICENSE_KEY);
  });



});
