import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerConnectDescriptionComponent } from './prayer-connect-description.component';

describe('PrayerConnectDescriptionComponent', () => {
  let component: PrayerConnectDescriptionComponent;
  let fixture: ComponentFixture<PrayerConnectDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerConnectDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerConnectDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
