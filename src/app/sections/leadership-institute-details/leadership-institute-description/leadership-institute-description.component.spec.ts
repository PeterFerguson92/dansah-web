import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipInstituteDescriptionComponent } from './leadership-institute-description.component';

describe('LeadershipInstituteDescriptionComponent', () => {
  let component: LeadershipInstituteDescriptionComponent;
  let fixture: ComponentFixture<LeadershipInstituteDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipInstituteDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipInstituteDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
