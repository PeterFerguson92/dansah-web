import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipInstituteDetailsComponent } from './leadership-institute-details.component';

describe('LeadershipInstituteDetailsComponent', () => {
  let component: LeadershipInstituteDetailsComponent;
  let fixture: ComponentFixture<LeadershipInstituteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipInstituteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipInstituteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
