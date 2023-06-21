import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipInstituteComponent } from './leadership-institute.component';

describe('LeadershipInstituteComponent', () => {
  let component: LeadershipInstituteComponent;
  let fixture: ComponentFixture<LeadershipInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
