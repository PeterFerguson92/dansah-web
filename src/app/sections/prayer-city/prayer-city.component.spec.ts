import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerCityComponent } from './prayer-city.component';

describe('PrayerCityComponent', () => {
  let component: PrayerCityComponent;
  let fixture: ComponentFixture<PrayerCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
