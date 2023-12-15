import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingAreaDetailsComponent } from './streaming-area-details.component';

describe('StreamingAreaDetailsComponent', () => {
  let component: StreamingAreaDetailsComponent;
  let fixture: ComponentFixture<StreamingAreaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamingAreaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingAreaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
