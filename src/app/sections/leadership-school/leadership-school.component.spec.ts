import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipSchoolComponent } from './leadership-school.component';

describe('LeadershipSchoolComponent', () => {
  let component: LeadershipSchoolComponent;
  let fixture: ComponentFixture<LeadershipSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
