import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipSingleCourseDescriptionComponent } from './leadership-single-course-description.component';

describe('LeadershipSingleCourseDescriptionComponent', () => {
  let component: LeadershipSingleCourseDescriptionComponent;
  let fixture: ComponentFixture<LeadershipSingleCourseDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipSingleCourseDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipSingleCourseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
