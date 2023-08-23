import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistriesDetailSectionComponent } from './ministries-detail-section.component';

describe('MinistriesDetailSectionComponent', () => {
  let component: MinistriesDetailSectionComponent;
  let fixture: ComponentFixture<MinistriesDetailSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistriesDetailSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistriesDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
