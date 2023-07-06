import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerCityDetailsComponent } from './prayer-city-details.component';

describe('PrayerCityDetailsComponent', () => {
  let component: PrayerCityDetailsComponent;
  let fixture: ComponentFixture<PrayerCityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerCityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerCityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
