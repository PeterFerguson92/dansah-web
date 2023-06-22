import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipInstituteSingleCourseComponent } from './leadership-institute-single-course.component';

describe('LeadershipInstituteSingleCourseComponent', () => {
  let component: LeadershipInstituteSingleCourseComponent;
  let fixture: ComponentFixture<LeadershipInstituteSingleCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipInstituteSingleCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipInstituteSingleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
