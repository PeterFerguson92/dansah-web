import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistriesSectionComponent } from './ministries-section.component';

describe('MinistriesSectionComponent', () => {
  let component: MinistriesSectionComponent;
  let fixture: ComponentFixture<MinistriesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistriesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
