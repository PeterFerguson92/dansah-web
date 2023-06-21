import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerConnectCentersComponent } from './prayer-connect-centers.component';

describe('PrayerConnectCentersComponent', () => {
  let component: PrayerConnectCentersComponent;
  let fixture: ComponentFixture<PrayerConnectCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerConnectCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerConnectCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
