import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerConnectDetailsComponent } from './prayer-connect-details.component';

describe('PrayerConnectDetailsComponent', () => {
  let component: PrayerConnectDetailsComponent;
  let fixture: ComponentFixture<PrayerConnectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerConnectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerConnectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
