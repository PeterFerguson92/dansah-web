import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerConnectComponent } from './prayer-connect.component';

describe('PrayerConnectComponent', () => {
  let component: PrayerConnectComponent;
  let fixture: ComponentFixture<PrayerConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
