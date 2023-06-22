import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipSingleCourseDetailsComponent } from './leadership-single-course-details.component';

describe('LeadershipSingleCourseDetailsComponent', () => {
  let component: LeadershipSingleCourseDetailsComponent;
  let fixture: ComponentFixture<LeadershipSingleCourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipSingleCourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipSingleCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
