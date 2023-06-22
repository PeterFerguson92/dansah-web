import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipCoursesListComponent } from './leadership-courses-list.component';

describe('LeadershipCoursesListComponent', () => {
  let component: LeadershipCoursesListComponent;
  let fixture: ComponentFixture<LeadershipCoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipCoursesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
