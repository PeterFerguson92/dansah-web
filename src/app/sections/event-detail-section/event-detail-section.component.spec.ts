import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailSectionComponent } from './event-detail-section.component';

describe('EventDetailSectionComponent', () => {
  let component: EventDetailSectionComponent;
  let fixture: ComponentFixture<EventDetailSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
