import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryDetailComponent } from './ministry-detail.component';

describe('MinistryDetailComponent', () => {
  let component: MinistryDetailComponent;
  let fixture: ComponentFixture<MinistryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
