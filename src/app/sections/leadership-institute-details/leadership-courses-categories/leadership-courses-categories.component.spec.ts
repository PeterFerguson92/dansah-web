import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipCoursesCategoriesComponent } from './leadership-courses-categories.component';

describe('LeadershipCoursesCategoriesComponent', () => {
  let component: LeadershipCoursesCategoriesComponent;
  let fixture: ComponentFixture<LeadershipCoursesCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipCoursesCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipCoursesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
