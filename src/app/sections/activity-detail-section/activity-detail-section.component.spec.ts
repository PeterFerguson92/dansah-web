import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDetailSectionComponent } from './activity-detail-section.component';

describe('ActivityDetailSectionComponent', () => {
  let component: ActivityDetailSectionComponent;
  let fixture: ComponentFixture<ActivityDetailSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDetailSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
