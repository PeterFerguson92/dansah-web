import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipInstituteCoursesComponent } from './leadership-institute-courses.component';

describe('LeadershipInstituteCoursesComponent', () => {
  let component: LeadershipInstituteCoursesComponent;
  let fixture: ComponentFixture<LeadershipInstituteCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipInstituteCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipInstituteCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
